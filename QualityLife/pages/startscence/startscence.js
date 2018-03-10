var Bmob = require('../../utils/bmob.js');
// pages/startScence/startscence.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  add : function(){



    var Diary = Bmob.Object.extend("diary");
    var diary = new Diary();
    diary.set("title", "hello");
    diary.set("content", "hello world");
    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("日记创建成功, objectId:" + JSON.stringify(result));
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建日记失败');

      }
    });

    // var Diary = Bmob.Object.extend("diary");
    // var query = new Bmob.Query(Diary);
    // query.get("	5Tm9WWW2", {
    //   success: function (result) {
    //     // The object was retrieved successfully.
    //     console.log("该日记标题为" + result.get("title"));
    //   },
    //   error: function (result, error) {
    //     console.log("查询失败" + JSON.stringify(error));
    //   }
    // });
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
  
  }
})