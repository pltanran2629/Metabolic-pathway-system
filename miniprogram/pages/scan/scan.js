const analysis=require('../../utils/analysis')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
topage:function(){
   wx.chooseImage({
     count: 1,
     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        let imgbase64 = wx.getFileSystemManager().readFileSync(tempFilePaths[0], "base64")
          wx.showLoading({
            title: '速度较慢，加载中，请耐心等待。。',
            icon: 'loading',
      })
        wx.request({
          url: 'http://127.0.0.1:3000/file',
          data:{
            "file":imgbase64
          },
          method:'POST',
          success:(res)=>{
            console.log(res.data)
            wx.hideLoading();
            var imagename=res.data.split("|")
            wx.setStorageSync('compound_name', imagename[0])
            console.log(imagename[1])
            var pathway=analysis(imagename[1])
            console.log(pathway)
            wx.setStorageSync('pathway_index', pathway)
            wx.navigateTo({
              url: '../compounds/compounds',
            })
          }
        })
      }
   })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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