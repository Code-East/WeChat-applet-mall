// pages/detail/detail.js
const {
  getDetailData
} = require("../../network/detail");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImage: [],
    tagList: [],
    title: "",
    price: '',
    goodsID: '',
    isData: true
  },
  // 获取详情页数据
  async getGoodsObj(id) {
    let res = await getDetailData(id);
    let resdata = res.data.result;
    // 判断是否有数据
    let pan = res.statusCode == 200 ? true : false;
    if (pan) {
      this.setData({
        topImage: resdata.itemInfo.topImages,
        tagList: resdata.shopInfo.services,
        title: resdata.itemInfo.title.replace(/2018/g, "2020"),
        price: resdata.itemInfo.lowNowPrice,
        goodsID: id
      });
    } else {
      this.setData({
        isData: false
      })
    }
  },
  // 点击加入购物车
  addCartClick() {
    let that = this;
    let image = that.data.topImage[0];
    let name = that.data.title;
    let price = that.data.price;
    let goodsID = that.data.goodsID;
    let goodsObj = {
      image,
      name,
      price,
      goodsID,
      count: 1,
      isCart: true
    };
    // 获取判断缓存里面有没有CartGoods数据
    wx.getStorage({
      key: 'CartGoods',
      success: function (res) {
        let list = res.data;
        // 使用findIndex寻找是否存在
        let index = list.findIndex(val => val.goodsID == goodsID);
        if (index == -1) {
          list.push(goodsObj);
          wx.setStorage({
            data: list,
            key: 'CartGoods',
            success: function () {
              wx.showToast({
                title: '加入成功',
              })
            }
          })
        } else {
          // 循环发现相同商品count++
          list.forEach((val) => {
            if (val.goodsID == goodsID) {
              val.count += val.count;
            }
          })
          // 里面有这个商品count++
          wx.setStorage({
            data: list,
            key: 'CartGoods',
            success: function () {
              wx.showToast({
                title: '加入成功',
              })
            }
          })
        }
      },
      fail: function (err) {
        let list = [];
        list.push(goodsObj);
        wx.setStorage({
          data: list,
          key: 'CartGoods',
          success: function () {
            wx.showToast({
              title: '加入成功',
            })
          }
        })
      }
    })
  },
  // 点击购买
  buyClick(){
    wx.showToast({
     title:'暂时没有此功能哦',
     icon:'none'
    })
  },
  // 点击首页
  toHomeClick(){
    wx.switchTab({
      url: '../home/home',
    })
  },
  // 点击跳转到购物车
  toCartClick(){
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   id:options.id
    // });
    this.getGoodsObj(options.id);
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