// pages/index/index.js
var version = '1.0.2';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    templates: [],
    is_examining: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.request_templates();
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
  
  },

  /**
   * 请求模板信息
   */
  request_templates: function () {
    var that = this;
    var tmp = [];
    wx.request({
      url: 'https://miniapp.codedragon.tech/get_templates_version?' + version,
      success: function (res) {
        for (var template of res.data.templates){
          tmp.push(template)
        }
        that.setData({
          templates: tmp,
          is_examining: res.data.is_examining
        })   
      }
    })
  },

  onItemClick: function(e) {
    var index = e.currentTarget.dataset.src;
    var template = this.data.templates[index];
    wx.setStorage({
      key: 'template',
      data: template,
    })
    if (this.data.is_examining) {
      wx.navigateTo({
        url: '../detail/detail',
      })
    }else {
      wx.navigateTo({
        url: '../edit/edit',
      })
    }
  }
})