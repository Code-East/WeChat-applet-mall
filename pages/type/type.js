const {getTypeData} = require('../../network/type')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeData:[]
  },
  // 获取数据函数
  async _getTypedata(maitKey){
    let res = await getTypeData(maitKey);
    let typelist = res.data.data.list;
    this.setData({
      typeData:typelist
    })
  },
  typeItemClick(e){
    let maitKey = e.detail;
    this._getTypedata(maitKey);
  },
  typeClick(){
    wx.showToast({
      title: '暂时没有数据哦！',
      icon:'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getTypedata(582);
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