// pages/index.js
/**
 * 当前正在编辑的句子
 */
var index = 0;
var placeholders = ['就算你是一流设计师', '就算你画图再牛逼', '我叫你改图你就得改图', '毕竟我是甲方', '嗯~', '甲方了不起啊','sorry，甲方真的了不起', '以后叫他天天改图', '天天改图，天天改'];
console.log(placeholders.length);
var sentences = Array(placeholders.length).fill('')
console.log(sentences.length);

Page({

  previewImage: function (image) {
    wx.previewImage({
      current: image, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  },

  nextSentence: function() {
    if (index == placeholders.length - 1) {
      // 数据填写完毕
      this.make_gif()
    }else {
      sentences[index] = this.data.sentence;
      console.log(this.data.sentence);
      index++;
      this.setData({
        textInfo: (index + 1) + ' / ' + placeholders.length,
        preDisplay: 'visible',
        sentence: '',
        placeholder: placeholders[index],
      })
    }
  },

  preSentence: function() {
    if (index > 0) {
      index--;
      this.setData({
        textInfo: (index + 1) + ' / ' + placeholders.length,
        sentence:sentences[index],
        placeholder: placeholders[index],
      })
      if(index == 0) {
        this.setData({
          preDisplay: 'hidden',
        })
      }
    }
  },

  /**
   * 发送请求
   */
  make_gif: function() {
    var tmpSentences = new Array(placeholders.length);
    for(var i = 0; i < placeholders.length; i++) {
      if(sentences[i] == '') {
        tmpSentences[i] = placeholders[i];
      }else {
        tmpSentences[i] = sentences[i];
      }
    }
    console.log(JSON.stringify(tmpSentences));
    var that = this;
    // 显示加载中
    this.setData({
      showLoading:true
    })
    wx.request({
      url: 'https://miniapp.codedragon.tech',
      data: {
        "font_size": "47",
        "sentences": tmpSentences
      },
      method: 'POST',
      success: function(res) {
        that.setData({
          'imgalist[0]':res.data,
          showLoading:false,
        });
        that.previewImage(res.data);
        console.log(res.data);
      }
    })
    console.log('make gif')
  },

  bindKeyInput: function (e) {
    this.setData({
      sentence: e.detail.value
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://t1.aixinxi.net/o_1c8u9vpgh16o1eirkvj1gor1foba.gif-j.jpg'],
    textInfo: '1 / 9',
    sentence: '',
    placeholder:placeholders[0],
    preDisplay: 'hidden',
    input_focus: false,
    showLoading: false,
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