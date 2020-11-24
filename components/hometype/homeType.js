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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击
    async typeClick(e){
      let id = e.currentTarget.dataset.typeid;
      wx.navigateTo({
        url: '../../pages/hometypepage/hometypepage?id='+id,
      })
    }
  }
})
