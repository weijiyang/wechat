// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoplaying:true,
    x:0,
    y:0,
    imgUrls: [
      '../images/img1.jpg',
      '../images/img1.jpg',
      '../images/img1.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    color:"rgb(255,255,255)",
    red : 255,
    yellow : 255,
    blue : 255
  },

  tap:function(e){
    this.setData({
      x : this.data.x + 30,
      y : this.data.y + 30
    })
  },
  changecolorred : function(e){
    this.setData({
      red:e.detail.value,
      color: "rgb(" + this.data.red + "," + this.data.yellow + "," + this.data.blue + ")"
    })
  },
  changecoloryellow : function(e){
    this.setData({
      yellow : e.detail.value,
      color: "rgb(" + this.data.red + "," + this.data.yellow + "," + this.data.blue + ")"
    })
  },
  changecolorblue : function(e){
    this.setData({
      blue : e.detail.value,
      color: "rgb(" + this.data.red + "," + this.data.yellow + "," + this.data.blue + ")"
    })
  },
  changeIndicatorDots : function(e){
    this.setData({
      indicatorDots : !this.data.indicatorDots
    })
  },
  changeAutoplay : function(e){
    this.setData({
      autoplay : !this.data.autoplay
    })
  },
  intervalChange : function(e){
    this.setData({
       interval : e.detail.value
    })
  },
  durationChange : function(e){
    this.setData({
    duration : e.detail.value
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
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play : function(){
    this.videoCtx.play()
    this.setData({
      videoplaying:false
    })
  },
  pause : function(){
    this.videoCtx.pause()
    this.setData({
      videoplaying: true
    })
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