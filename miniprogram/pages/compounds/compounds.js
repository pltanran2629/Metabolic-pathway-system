// pages/compounds/compounds.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    compound_name: '',
    pathway_index: [],
    pathway_card: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      compound_name: wx.getStorageSync('compound_name'),
      pathway_index: wx.getStorageSync('pathway_index')
    })
    var pathway_card = []
    for (var i = 0; i < this.data.pathway_index.length; i++) {
      wx.cloud.callFunction({
        name: 'pathwaydetail',
        data: {
          pathwayindex: this.data.pathway_index[i]
        },
        success: res => {
          // console.log(res.result.data[0])
          pathway_card.push(res.result.data[0])
          this.setData({
            pathway_card: pathway_card
          })
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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