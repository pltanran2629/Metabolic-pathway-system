// pages/pathway/pathway.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pathway: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({
      name: 'pathwaydetail',
      data: {
        pathwayindex: wx.getStorageSync("pathwayindex")
      },
      success: res => {
        console.log(res)
        this.setData({
          pathway: res.result.data[0]
        })
    
      }
    })
  },
  clickImg(e) {
    var imgUrl = this.data.pathway.pathway_image;
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function (res) {
        console.log(res)
      }
    })
  },
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})