const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: '点击登录',
    userInfo: {
      avatarUrl: '',
      nickName: "未登录"
    },
    historycompound:0,
    historypathway:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        login: "退出登录"
      })
    }
    else{
      this.setData({
        userInfo: {
          avatarUrl: '',
          nickName: "未登录"
        }
      })
    }
   this.historynum()
  },
historynum(){
  wx.cloud.database().collection("historycompound").where({
    _openid:app.globalData.user_openid
  }).count({
    success:res=>{
      console.log(res)
      this.setData({
        historycompound:res.total
      })
    }
  })
  wx.cloud.database().collection("historypathway").where({
    _openid:app.globalData.user_openid
  }).count({
    success:res=>{
      console.log(res)
      this.setData({
        historypathway:res.total
      })
    }
  })
},
tohistory(){
  wx.navigateTo({
    url: '../history/history',
  })
},
  toaboutus() {
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  login() {
    console.log(app.globalData.userInfo)
    // 退出
    if (this.data.login=="退出登录") {
      app.globalData.userInfo = null
      this.setData({
        login: '点击登录',
        userInfo: {
          avatarUrl: '',
          nickName: "未登录"
        },
      })
    } else {
      console.log("执行")
      wx.getUserProfile({
        desc: '获取用户信息',
        success: res => {
          // console.log(res.userInfo)
          var user = res.userInfo
          //设置全局用户信息
          app.globalData.userInfo = user
          //设置局部用户信息
          this.setData({
            userInfo: user
          })
          //检查之前是否已经授权登录
          wx.cloud.database().collection('user').where({
            _openid: app.globalData.user_openid
          }).get({
            success: res => {
              //原先没有添加，这里添加
              if (!res.data[0]) {
                //将数据添加到数据库
                wx.cloud.database().collection('user').add({
                  data: {
                    avatarUrl: user.avatarUrl,
                    nickName: user.nickName
                  },
                  success: res => {
                    wx.showToast({
                      title: '登录成功',
                      icon: 'none'
                    })
                  }
                })
              } else {
                //已经添加过了
                this.setData({
                  userInfo: res.data[0],
                  login: "退出登录"
                })
              }
            }
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   this.historynum()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})