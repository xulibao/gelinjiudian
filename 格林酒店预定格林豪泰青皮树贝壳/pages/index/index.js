Page({
  data:{
    tabs:['全日房','休闲房'],
    reserves:[
      {name:'上海',startTime:'7月5日',endTime:'7月6日',serchContent:'区域/商圈/门店'},
      {name:'上海',startTime:'7月5日',endTime:'11:00',serchContent:'区域/商圈/门店'},
    ],
    bannerdata:[
       [{image:'https://tva3.sinaimg.cn/crop.0.0.180.180.180/bcba1d11jw1e8qgp5bmzyj2050050aa8.jpg?Expires=1562732745&ssig=JpqvlaTinT&KID=imgbed,tva'},{image:'https://tva1.sinaimg.cn/crop.571.215.616.616.180/005WAGX2tw1enjqe1thbdj31b60tl77k.jpg?Expires=1562732787&ssig=MfHs3ftyPo&KID=imgbed,tva'},{image:'https://tvax2.sinaimg.cn/crop.0.3.587.587.180/a3a6941fly8fg6mqwrmc4j20gf0gfab9.jpg?Expires=1562732873&ssig=Yho4B%2FVGZo&KID=imgbed,tva'}],
      [{image:'https://tvax1.sinaimg.cn/crop.0.0.182.182.180/699d71c9ly8fmxplxy9alj20520523ye.jpg?Expires=1562726307&ssig=iy1gC2cV2T&KID=imgbed,tva'},{image:'https://tvax3.sinaimg.cn/crop.0.0.996.996.180/7ad64f97ly8g0yplylmzsj20ro0roq38.jpg?Expires=1562729318&ssig=aLJZuZcoqZ&KID=imgbed,tva'},{image:'https://tvax1.sinaimg.cn/crop.0.0.200.200.180/6d9f761bly8g0d0dw48d4j205k05kaa6.jpg?Expires=1562729345&ssig=jkjsIMXj8K&KID=imgbed,tva'}],
      [{image:'https://tvax2.sinaimg.cn/crop.0.0.751.751.180/007JvucOly8g2c9p2ycfrj30kv0kvaa7.jpg?Expires=1562732573&ssig=iqCnr4QUrV&KID=imgbed,tva'},{image:'https://tva4.sinaimg.cn/crop.0.0.180.180.180/a8779042jw1e8qgp5bmzyj2050050aa8.jpg?Expires=1562732636&ssig=s4Eih2opOF&KID=imgbed,tva'},{image:'https://tvax1.sinaimg.cn/crop.0.38.515.515.180/d44b5300ly8g35aqcm2owj20fe0fedgd.jpg?Expires=1562732683&ssig=9hBPI%2B6jqD&KID=imgbed,tva'}],
    ],

    activeTab:0,
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  onTabBarTap(e){
    const {index} = e.target.dataset
    this.setData(
      {activeTab:index},
    );
  },
   changeIndicatorDots(e) {
    this.setData({
      activeTab:index,
    });
  },

  intervalChange(e) {
     const {current} = e.detail
    this.setData({
      activeTab:current,
    });
  },
  

});
