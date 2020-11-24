// components/typeleftnav.js
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
    currentIndex:0,
    typeList:[
      {
        id:0,
        maitKey:582,
        name:'衣服'
      },{
        id:1,
        maitKey:600,
        name:'包包'
      },{
        id:2,
        maitKey:5253,
        name:'鞋子'
      },{
        id:3,
        maitKey:609,
        name:'饰品'
      },{
        id:4,
        maitKey:602,
        name:'家居'
      },{
        id:5,
        maitKey:606,
        name:'工艺'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      let index = e.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
      });
      let objlist = this.data.typeList.filter((val)=>{
        return val.id == index
      });
      let nowobj = objlist[0];
      this.triggerEvent('typeClick',nowobj.maitKey);
    }
  }
})
