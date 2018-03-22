// pages/detail/detail.js
var details = ['在《读心神探》17集，麦永希与同伴跟踪梁永泰被发现，又被迫亮明警察身份，被对方手下嘲笑跟踪了两天却找不到证据。', '他是来自长春的王境泽，拳头是他解决问题的唯一办法。在家，他被众星捧月，在学校，没人敢惹怒他。他暴躁激动爱闹事，但也单纯简单直性子。在他眼中，似乎没有值得尊敬和佩服的人。在父母和七大姑八大姨的宠爱中长大，身为这个大家族中唯一的男孩，他享受着众星捧月的溺爱和骄纵，对他言听计从，犯了错误也没人怪他。可惜的是，这样的成长坏境没能让他成为一个绅士，而是促成了他目中无人的暴躁性格。对关心他的人，他却用怒吼来回应;学校对他来说就是垃圾，打架斗殴、毁坏公物、大闹校长室，这些行为换来的是几次被劝退。“除了长得漂亮，其余的全是缺点”，这是母亲对王境泽的评价;“学生不该做的，他全占了”，这是班主任对他无奈的心声。','《旺角卡门》是影之杰制作有限公司出品的剧情片，由王家卫执导，刘德华、张曼玉、张学友、万梓良主演。影片于1988年6月9日在中国香港上映。影片讲述了黑道人物华为了照顾不成材的好友而跟黑道狠角色结仇，之后跑到离岛养伤，并且与表妹渐生情愫，但华的江湖身份却使这份感情屡遭挫折。1989年张学友凭借《旺角卡门》获得第8届香港电影金像奖最佳男配角奖。']
Page({

  previewImage: function (image) {
    wx.previewImage({
      current: image, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    detail: '',
    imgalist: ['https://t1.aixinxi.net/o_1c8u9vpgh16o1eirkvj1gor1foba.gif-j.jpg'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'template',
      success: function (res) {
        var index = 0;
        if (res.data.template == 'wangjingze') {
          index = 1;
        } else if (res.data.template == 'xueyou') {
          index = 2;
        }
        that.setData({
          'imgalist[0]': res.data.gif_url,
          title: res.data.title,
          detail: details[index]
        });
      },
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
  
  }
})