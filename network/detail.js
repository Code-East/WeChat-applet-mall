// 获取详情页request
export function getDetailData(iid){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/detail',
      method:'GET',
      data:{
        iid
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