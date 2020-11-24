// 获取轮播图的request
export function getSwiperImgAsync(){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/home/multidata',
      method:'GET',
      success(res){
        resole(res);
      },
      fail(err){
        reject(err);
      }
    })
  })
}
// 获取首页数据
export function getHomeData(type,page){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/home/data',
      method:'GET',
      data:{
        type,
        page
      },
      success(res){
        resole(res);
      },
      fail(err){
        reject(err);
      }
    })
  })
}
// 获取type
export function getTypeData(miniWallkey,type){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/subcategory/detail',
      method:'GET',
      data:{
        miniWallkey,
        type
      },
      success(res){
        resole(res);
      },
      fail(err){
        reject(err);
      }
    })
  })
  
}