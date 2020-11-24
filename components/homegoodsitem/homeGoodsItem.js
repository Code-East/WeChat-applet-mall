// components/homegoodsitem/homGoodsItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitem:{
      type:Object,
      value:{}
    }
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
    // 点击跳转
    HomeGoodsTap(){
      let id = this.properties.goodsitem.iid;
      wx.navigateTo({
        url: '../../pages/detail/detail?id='+id
      })
    }
  },
  created(){
  }
})
