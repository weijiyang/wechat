var Bmob = require('../../utils/bmob.js');
var app = getApp();
// pages/startScence/startscence.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户登陆
    userInfo: {},
    hasUserInfo: false,
    // 页面设置
    "weather":"cloudy",
    "weather_path":"../../images/weather/cloudy.jpg",
    "temperature":"12°C",
    //工具栏信息
    "tools":[
      {
        "toolid":'0',
        "toolName":"NOTE",
        "toolLogo":"../../images/icon/message.jpg",
        "toolLogoActive": "../../images/icon/message_selected.jpg",
        "url":'../notes/notes',
        "active":false
      },
      {
        "toolid": '1',
        "toolName": "FOOD",
        "toolLogo": "../../images/icon/food.jpg",
        "toolLogoActive": "../../images/icon/food_selected.jpg",
        "url": '../food/food',
        "active": false
      },
      {
        "toolid": '2',
        "toolName": "DEMO",
        "toolLogo": "../../images/icon/computer.jpg",
        "toolLogoActive": "../../images/icon/computer_selected.jpg",
        "url": '../food/food',
        "active": false
      },
      {
        "toolid": '3',
        "toolName": "LOVE",
        "toolLogo": "../../images/icon/loveNode.jpg",
        "toolLogoActive": "../../images/icon/loveNode_selected.jpg",
        "url": '../loveNode/loveNode',
        "active": false
      },
      {
        "toolid": '4',
        "toolName": "SHOP",
        "toolLogo": "../../images/icon/shop.jpg",
        "toolLogoActive": "../../images/icon/shop_selected.jpg",
        "url": '../shop/shop',
        "active": false
      }
    ]
  },
  changeActiveStart:function(e){
    var id = e.currentTarget.dataset.toolid;
    var array = this.data.tools;
    for(var i = 0 ;i < array.length ; i++){
      if( i == id ){
        array[i].active = !array[i].active;
      }
      else{
        array[i].active = false;
      }
    }
    this.setData({
      tools : array
    })
  console.log(this.data.userInfo)
    // wx.navigateTo({
    //   url: e.currentTarget.dataset.toolurl
    // })
  },
  changeActiveEnd : function(e){
    var id = e.currentTarget.dataset.toolid;
    var array = this.data.tools;
    for(var i = 0; i<array.length ; i++){
      array[i].active = false;
    }
    this.setData({
      tools : array
    })
    console.log("changeActiveEnd");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
      return{
          title : '呆呆の日常',
          desc: '(๑•̀ㅂ•́)و✧解决日常生活遇到的一些小问题，追求优质生活~',
          path : 'pages/index/index'
      }
  }
})