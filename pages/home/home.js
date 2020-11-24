let {getSwiperImgAsync,getHomeData}  = require("../../network/home");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    goodsList:[],
    weekUp:[],
    shell:{},
    nowpage:1
  },
  // 获取轮播图的函数
  async getSwiper(){
    let res = await getSwiperImgAsync();
    let banners = res.data.data.banner.list;
    this.setData({
      bannerList:banners
    })
  },
  // 获取首页数据
  async getHomeData(type,page){
    let res = await getHomeData(type,page);
    let data = res.data.data.list;
    let reg = /2018/g;
    data.forEach(val => {
       val.title = val.title.replace(reg,"2020");
    }); 
    return data;
  },
  // 修改数据
  async getdata(type,page){
    let data = await this.getHomeData(type,page);
    this.setData({
        goodsList:data
      })
  },
  // 上拉加载更多
  async getMoreData(type,page){
    let goodsdata = this.data.goodsList;
    let datalist = await this.getHomeData(type,page);
    goodsdata.push(...datalist);
    this.setData({
      goodsList:goodsdata
    })

  },
  // 获取流行数据中大图和每周更新
  async getShell(type,page){
    let res = await getHomeData(type,page);
    let data = res.data.data.list;
    let shellList = data.filter((val,index)=>{
      return index==12
    })
    let reslist = data.filter((val,index)=>{
      return index>0 && index<10
    })
    this.setData({
      shell:shellList,
      weekUp:reslist
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图
    this.getSwiper();
    // 获取首页数据
    this.getdata('pop',1);
    // 获取好看大图
    this.getShell('sell',1)
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
    // 获取轮播图
    this.getSwiper();
    // 获取首页数据
    this.getdata('pop',1);
    // 获取好看大图
    this.getShell('sell',1);

    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = this.data.nowpage+1;
    this.setData({
      nowpage:page
    })
    this.getMoreData('pop',this.data.nowpage);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})