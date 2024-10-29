// Components/returnbtn/returnbtn.js
Component({
  options: {
    styleIsolation: 'shared',
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backto(){
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
