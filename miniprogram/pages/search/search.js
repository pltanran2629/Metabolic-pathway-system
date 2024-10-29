const analysis = require("../../utils/analysis")
const app = getApp()
var historycompound = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [{
      'compound_name': '暂无'
    }],
    hot: [{
      "compound_name": "O=CC(O)CO"
    }, {
      "compound_name": "O=CC(O)CO"
    }, {
      "compound_name": "O=CO"
    }, {
      "compound_name": "CC(O)C=O"
    }],
    search: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.cloud.database().collection("historycompound").where({
      _openid: app.globalData.user_openid,
      status: "1"
    }).get({
      success: res => {
        historycompound = res.data.reverse()
        if (historycompound.length > 0) {
          this.setData({
            search: '',
            history: historycompound.slice(0, 6)
          })
        }
      }
    })
  },
  clearhistory() {
    wx.cloud.database().collection("historycompound").where({
      _openid: app.globalData.user_openid,
      status: "1"
    }).update({
      data: {
        status: '0'
      },
      success: res => {
        console.log(res)
        this.setData({
          history: [{
            'compound_name': '暂无'
          }]
        })
      },
      Error: res => {
        console.log(res)
      }
    })
  },
  GetSearchInput(e) {
    var r = /^[^\u4e00-\u9fa5]+$/
    if (r.test(e.detail.value)) {
      this.setData({
        search: e.detail.value
      })
    } else {
      wx.showToast({
        title: '请输入正确的smile串',
        icon: 'none',
        duration: 1500
      })
    }
  },
  searchhothis(e) {
    if (e.currentTarget.dataset.compoundname != '暂无') {
      this.setData({
        search: e.currentTarget.dataset.compoundname
      })
      this.ToSearch()
    }
  },
  clearinput(){
    this.setData({
      search: ''
    })
  },
  ToSearch(e) {
    if (this.data.search == '') {
      wx.showToast({
        title: '请输入正确的smile串',
        icon: 'none'
      })
      return
    }
    wx.request({
      url: 'http://127.0.0.1:3000/check',
      method: "POST",
      data: {
        "name": this.data.search
      },
      success: (res) => {
        // console.log(res.data)
        // console.log(analysis(res.data))
        wx.setStorageSync('compound_name', this.data.search)
        wx.setStorageSync('pathway_index', analysis(res.data))
        wx.cloud.database().collection('historycompound').add({
            data: {
              compound_name: this.data.search,
              pathway_index: analysis(res.data),
              status: '1',
              createTime: wx.cloud.database().serverDate()
            }
          }).then(res => {
            console.log('添加成功', res)
            // console.log(historycompound[6]._id)
            if (historycompound.length > 6) {
              wx.cloud.database().collection("historycompound").doc(historycompound[6]._id).update({
                data: {
                  status: '0'
                }
              })
            }
            wx.navigateTo({
              url: '../../pages/compounds/compounds',
            })
          })
          .catch(res => {
            console.log('添加失败', res)
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
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