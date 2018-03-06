// pages/temp/temp.js
Page({

  viewTap:function(){
    console.log("绑定事件")
  },
  /**
   * 页面的初始数据
   */
  data: {
    templateMsg : {
      index : 0 ,
      msg : "this is message  for template",
      time :  new Date()
    },
    id : 0,
    text : "这是文本",
    num :0,
    condition: true,
    zero :  0 ,
    numArray:[11,12,13,14,15],
    array:[{text:'init data'},{text:'message'},{text:'what fuck'}],
    object :{
      text : 'init object data '
    }
  },
  handleTap1 : function(){
    console.log("this is handleTap1")
  },
  handleTap2: function () {
    console.log("this is handleTap2")
  },
  handleTap3: function () {
    console.log("this is handleTap3")
  },
  changeCondition : function(){
    this.setData({
      "condition" : !this.data.condition
    })
  },
  changeText : function(){
    this.setData({
      text : 'change data '
    })
  },
  changeNum : function(){
    this.data.num = 1;
    this.setData({
      num : this.data.num 
    })
  },
changeItemArray : function(){
    this.setData({
     "array[0].text" :" this is the new message"
    })
  },
changeItemObject:function(){
  this.setData({
    "object.text":" this is the new object object message"
  })
},
  addNewField:function(){
    this.setData({
      "newField.text":"this is a new message"
    })
  },

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
    return  {
      "title" : "练习",
      "path":"pages/temp/temp"
    }
  }
})