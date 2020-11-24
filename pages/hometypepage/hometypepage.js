const {getTypeData } = require("../../network/home");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeDataList:[]
  },
  async getTypePageData(miniWallkey){
    let res = await getTypeData(miniWallkey,'pop');
    let typelist = res.data;
    typelist.forEach(val => {
      val.title = val.title.replace(/2018/g,"2020")
    })
    this.setData({
      typeDataList:typelist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.showToast({
      title: '正在加载',
      icon:"loading",
      success(){
        let miniWallkey = options.id;
        that.getTypePageData(miniWallkey);
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