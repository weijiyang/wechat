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
    "weather":"晴",
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
    var _this = this;
    //登陆获取信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      }) 
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
    //获取用户位置信息
    wx.getLocation({
      success:function(res){
        var lan = res.latitude;
        var lon = res.longitude;
        console.log("经纬度：" + lan + ", " + lon);
        _this.getCity(lan,lon) 
      }
    })
  },
  //通过经纬度获取城市信息
  getCity : function(lan ,lon){
    var that = this;
    var url = "https://api.map.baidu.com/geocoder/v2/";  
    var param = {
      location : lan + ',' + lon,
      output : "json",//返回的数据格式
      ak: "MKABLw7PZssnQPy0BmnV2e6vcUyKWZxf"//地图api的ak
    }
    wx.request({
      url : url,
      data : param,
      success:function(res){
        console.log(res)
        var city = res.data.result.addressComponent.city;
        var district = res.data.result.addressComponent.district;
        var street = res.data.result.addressComponent.street;  
        city = city.substring(0,city.length-1)
        console.log(city)
        that.getWeather(city)
      }
    })
  },
  getWeather : function(city){
    var that = this ;
    var url = "https://free-api.heweather.com/v5/weather";  
    var param  ={
      key: "4a555d4d1adc451d8ceeaa73869c9519",
      city:city
    };
    wx.request({
      url : url,
      data : param ,
      header: {
        'content-type': 'application/json'
      },  
      success:function(res){
        console.log(res.data.HeWeather5[0].daily_forecast[0].cond.txt_d)
        console.log(res)
        that.setData({
          "weather": res.data.HeWeather5[0].daily_forecast[0].cond.txt_d,
          "temperature":res.data.HeWeather5[0].daily_forecast[0].tmp.max + "°C"
        })
      }
    })
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