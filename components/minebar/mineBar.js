// components/minebar/mineBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemData:[
      {
        img:"../../images/mine/beforbuy.svg",
        name:'待支付'
      },
      {
        img:"../../images/mine/daifahuo.svg",
        name:'待发货'
      },
      {
        img:"../../images/mine/daishouhuo.svg",
        name:'待收货'
      },
      {
        img:"../../images/mine/beforbuy.svg",
        name:'已完成'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dinClick(){
      wx.showToast({
        title: '没有订单呢！',
        icon:"none"
      })
    }
  }
})
