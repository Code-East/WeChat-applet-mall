// components/weekupitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemdata:({
      type:Object,
      value:{}
    })
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
    // 点击跳转到详情页
    weekGoodsTap(){
      let id = this.properties.itemdata.iid;
      wx.navigateTo({
        url: '../../pages/detail/detail?id='+id
      })
    }
  }
})
