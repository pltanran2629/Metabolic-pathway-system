const app = getApp()
const changename=require('../../utils/changename.js')
const changenameen=require('../../utils/changenameen')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    historycompound:[],
    historypathway:[]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.setData({
    TabCur: 0,
  })
  wx.cloud.database().collection("historycompound").where({
    _openid:app.globalData.user_openid
  }).orderBy('createTime','desc').get({
    success:res=>{

      for(var i=0;i<res.data.length;i++){
          for(var j=0;j<res.data[i].pathway_index.length;j++){
            res.data[i].pathway_index[j]=changename(res.data[i].pathway_index[j])
          }
      }
      console.log(res)
      this.setData({
        historycompound:res.data
      })
    }
  })
  wx.cloud.database().collection("historypathway").where({
    _openid:app.globalData.user_openid
  }).orderBy('createTime','desc').get({
    success:res=>{
      console.log(res)
      for(var i=0;i<res.data.length;i++){
          res.data[i].pathway_id=changename(res.data[i].pathway_id)
      }
      this.setData({
        historypathway:res.data
      })
    }
  })
  },
  topathway(e){
    wx.setStorageSync('pathwayindex', changenameen(e.currentTarget.dataset.pathway))
    wx.navigateTo({
      url: '../../pages/pathway/pathway',
    })
  },
  tocompound(e){
    wx.setStorageSync('compound_name', e.currentTarget.dataset.compound_name)
    var pathwaylist=[]
    var pathway=e.currentTarget.dataset.compoundpathway
    for(var i=0;i<pathway.length;i++){
      pathwaylist.push(changenameen(pathway[i]))
    }
    wx.setStorageSync('pathway_index', pathwaylist)
    wx.navigateTo({
      url: '../../pages/compounds/compounds',
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