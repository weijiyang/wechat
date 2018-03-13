var Bmob = require('../../utils/bmob.js');
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    ideaList:[
      {
        "id":"0",
        "content":"在吗？小胖子？"
      },
      {
        "id" : "1",
        "content":"可以提点建议么？"
      }
    ]
  },
  addIdea : function(e){
    var _this = this;
    var arr = _this.data.ideaList
    if(!_this.data.userInfo){
      arr.push({ "id":null, "content": "哎呀我还没有登陆呐~" })
      _this.setData({
        ideaList: arr
      })
    }else{
      var Idea = Bmob.Object.extend("idea")
      var idea = new Idea()
      idea.set("nickName", this.data.userInfo.nickName)
      idea.set("avatarUrl", this.data.userInfo.avatarUrl)
      idea.set("province", this.data.userInfo.province)
      idea.set("country", this.data.userInfo.country)
      idea.set("city", this.data.userInfo.city)
      idea.set("content", e.detail.value)
      idea.save(null, {
        success: function (res) {
          arr = _this.data.ideaList
          arr.push({ "id": res.id, "content": e.detail.value })
          _this.setData({
            ideaList: arr
          })

        },
        error: function (res, err) {
          arr = _this.data.ideaList
          arr.push({ "id": null, "content": err + "发生错误~请重试" })
          _this.setData({
            ideaList: arr
          })
        }
      })
    }
    var query = wx.createSelectorQuery();
    query.select("#idea_container")
    query.exec(function(res){
      console.log(res)
    })
    wx.pageScrollTo({
      scrollTop: this.data.ideaContentHeight,
      duration: 300
    })
  },
  onLoad: function (options) {
    //获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
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
  getUserIdea : function(){
    var _this = this ;
    var Diary = Bmob.Object.extend("idea");
    var idea = new Bmob.Query(Diary);
    var userMsg = idea.equalTo("nickName",this.data.userInfo.nickName)
    userMsg.find({
      success: function (result) {
        var arr =[];
        for(var i =0 ;i <result.length ; i++){
          arr.push({"id":result[i].id,"content":result[i].attributes.content})
        }
        _this.setData({
          ideaList : arr
        })
      },
      error: function (result, error) {
        console.log("初始化用户信息查询失败");
      }
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function () {
    //用户登陆&调取数据库
  
    if (this.data.hasUserInfo) {
        this.getUserIdea();
    }
  },
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
  onShareAppMessage: function () {

  }
})