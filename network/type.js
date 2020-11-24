// 获取分类数据
export function getTypeData(maitKey){
  return new Promise((resole,reject)=>{
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/subcategory',
      method:'GET',
      data:{
        maitKey
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