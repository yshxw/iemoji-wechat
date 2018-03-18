// pages/index.js
/**
 * 当前正在编辑的句子
 */
var index = 0;
var placeHolders = ['第1句话', '第2句话', '第3句话', '第4句话', '第5句话', '第6句话', '第7句话', '第8句话', '第9句话'];
var sentences = new Array();

Page({

  previewImage: function (image) {
    wx.previewImage({
      current: image, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    })
  },   

  nextSentence: function(text) {
    if (index == placeHolders.length - 1) {
      // 数据填写完毕
      this.make_gif()
    }else {
      sentences[index] = text;
      index++;      
      this.setData({
        textInfo: '第' + (index+1) + '句话',
        preDisplay: 'visible'
      })
      console.log(this.data.textInfo);
    }
  },

  preSentence: function(text) {
    if (index > 0) {
      sentences[index] = text; 
      index--;           
      this.setData({
        textInfo: '第' + (index+1) + '句话',
      })
      if(index == 0) {
        this.setData({
          preDisplay: 'hidden'
        })
      }
      console.log(this.data.textInfo);
    }
  },

  /**
   * 发送请求
   */
  make_gif: function() {
    var that = this;
    wx.request({
      url: 'https://miniapp.codedragon.tech',
      data: {
        "font_size": "47",
        "sentences": [
          "sample sentence0",
          "sample sentence1",
          "sample sentence2",
          "sample sentence3",
          "sample sentence4",
          "sample sentence5",
          "sample sentence6",
          "sample sentence7",
          "sample sentence8",
          "sample sentence9"
        ]
      },
      method: 'POST',
      success: function(res) {
        that.setData({
          'imgalist[0]':res.data,
        })
        that.previewImage(res.data)
        console.log(res.data)
      }
    })
    console.log('make gif')
  },


  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://sorry.xuty.tk/cache/3cfab5c16f5148f88b72640c51cefde4.gif'],
    textInfo: '第1句话',
    ssentence: '',
    preDisplay: 'hidden'
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