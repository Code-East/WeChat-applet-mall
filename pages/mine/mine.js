// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin: false,
    headerImg: "../../images/mine/defaultheader.jpg",
    name: "",
    user: ''
  },
  // 登入
  getUser(res) {
    console.log(res);
    
    let userData = res.detail.userInfo
    this.setData({
      headerImg: userData.avatarUrl,
      islogin: true,
      name: userData.nickName,
      user: userData
    })
    wx.login({
      timeout: 20000,
      success(res){
        console.log(res);
      }
    })
  },
  // 点击关于我
  aboutMe() {
    wx.navigateTo({
      url: '../aboutme/aboutme',
    })
  
  },
  // 获取地址
  getAddress() {
    // wx.navigateTo({
    //   url: '../address/address',
    // })
    wx.chooseAddress({
      success: (result) => {
        console.log(result);
        
      },
    })
  },
  // wx.getLocation({
  //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //   success(res) {
  //     const latitude = res.latitude;
  //     const longitude = res.longitude;
  //     wx.chooseLocation({
  //       latitude,
  //       longitude,
  //       success(res) {
  //         console.log(res);
  //       }
  //     })
  //   }
  // })
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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