// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CartDataList: [],
    onShow: false,
    selectAll:false,
    sum:0
  },
  // 点击删除触发的父函数
  delClick() {
    this.getCartData();
  },
  // 点击购买
  toBuyClick(){
    wx.showToast({
      title: '暂时不能购买哦',
      icon:'none'
    })
  },
     //点击去逛逛
    goShooping(){
      wx.switchTab({
        url: '../home/home',
      })
    },
  // 点击选择
  async selectClick(e) {
    let that = this;
    let res = await this.getCartStroage();
    // 获取子组件传递的id
    let id = e.detail;
    let list = res.data;
    // 获取商品使用id判断是哪一个变为 反
    list.forEach(val => {
      if (val.goodsID == id) {
        val.isCart = !val.isCart
      }
    });
    // 修改完选择状态就把数据修改掉
    wx.setStorage({
      data: list,
      key: 'CartGoods',
      success() {
        // 使用some查找是否存在为false未被选中(返回true表示有false则不全选，反知，全选)
        let isAllSelect = list.some((val) => {
          return val.isCart == false
        });
        that.getSum();
        if(!isAllSelect){
          that.setData({
            selectAll:true
          })
        }else{
          that.setData({
            selectAll:false
          })
        }
      }
    })
    
  },
  // 点击全选
  async AllBtnClick(){
    //  获取修改
    let that = this;
    let res = await this.getCartStroage();
    let list = res.data
    if(list.length==0){
      that.setData({
        selectAll:false
      })
      return
    }
    that.setData({
      selectAll:!that.data.selectAll
    })
    // 循环修改选中状态
    list.forEach(val => {
      val.isCart = that.data.selectAll;
    });
    wx.setStorage({
      data: list,
      key: 'CartGoods',
      success(){
        // 修改成功刷新数据
        that.getCartData()
      }
    })
    
  },
  // 查看是否全选
  checkSelectAll(){
    let checked =  this.data.CartDataList.some((val)=>{
      return val.isCart == false;
    });
    this.setData({
      selectAll: !checked
    })
  },
  //封装获取的方法
  getCartStroage() {
    return wx.getStorage({
      key: 'CartGoods',
    })
  },
  // 获取存在storage里的购物车数据
  async getCartData() {
    let that = this;
    that.getCartStroage().then(res => {
      that.setData({
        CartDataList: res.data,
        onShow: true,
      });
      // 调用check全选检查
      that.checkSelectAll();
      // 修改总和
      that.getSum();
      if (res.data.length == 0) {
        that.setData({
          onShow: false
        });
      }
    }).catch(err => {
      that.setData({
        onShow: false
      })

    });
  },
  // 计算总和
  async getSum(){
    let that = this;
    let nowsum = 0;
    let list =  await this.getCartStroage();
    let listall = list.data.filter(val => val.isCart);
    listall.forEach(val => {
      nowsum = nowsum + (val.price*val.count);
    });
    that.setData({
      sum:nowsum
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCartData();
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
    this.getCartData();
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