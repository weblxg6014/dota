<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="hbg">
            <div class=" container d-flex justify-content-between">
                <div>
                    <a href="javascript:;">
                        <img src="http://176.30.9.205:3000/img/logo1.png" class="mt-3 mb-3" alt="">
                    </a>
                </div>
                <div class="text-center aspanc d-flex position-absolute mar z-in" data-bgid="#bgImg">
                    <div  class=" bgdiv pt-3" v-for="(item,span) of title" :key="span" @mousemove="tex(span)">
                        <router-link :to="item.url" >
                            <p class="mb-0 mt-2">{{item.chi}}</p>
                            <p class="small">{{item.eng}}</p>
                        </router-link>
                        <ul id="header" class="position-absolute list-unstyled mt-2 d-none">
                            <li v-for="(uli,span) of tnext[tnexid]" :key="span"><a href="javascript:;" class="small">{{uli}}</a></li>
                        </ul>
                    </div>
                    
                    <div class="rbgimg mt-3 ml-4"></div>
                </div>
                <div class="text-center logdiv mt-3">
                    <p class=" d-inline">您好 , </p>
                    <span>
                        <a href="javascript"> 请登录</a>
                    </span>
                    <br>
                    <span class="d-block cb">登录后可进入您的个人中心</span>
                </div>
            </div>
        </div>
    <router-view>

    </router-view>
    <!-- 底部 -->
    <div class="dark">
        <div class="container">
            <div class="d-flex pt-4 text-center">
                <a href="javascript:;">
                    <img src="http://176.30.9.205:3000/img/index/logo2.png" alt="">
                </a>
                <a href="jsvascript:;">
                    <img src="http://176.30.9.205:3000/img/index/logo.png" alt="" class="ml-3 mr-5 imgw">
                </a>
                <p class="pc size ml-3 pl-3">完美世界（北京）网络技术有限公司 版权所有 Copyright © 2008-2020 Beijing Perfect World Network Technology Co., Ltd. All Rights reserved
                        ©2012 Valve Corporation. All Rights reserved. Licensed to Beijing Perfect World Network Technology Co., Ltd. in China</p>
            </div>
            <p class="text-center pac size mb-0">
                京ICP证：050016号
                <a href="javascript:;" class="pc">
                    《网络文化经营许可证》编号：京网文[2017]8929-1007号
                </a> 
                《网络视听许可证》编号：0110587
                <br>
                    京公网安备11010502033859号   
                    <a href="javascripg" class="pc">
                        <img src="http://176.30.9.205:3000/img/index/icon.png" alt="">
                            文网进字[2013] 028号
                    </a>
                    新出审字[2013] 1505号 ISBN：978-7-89989-826-0 | 
                    <a href="javascript::">
                            家长监护
                    </a>
            </p>
            <p class="pac size text-center mb-0 pb-5">
                本网络游戏适合年满16岁以上的用户使用：请您确定已如实进行实名注册。为了您的健康，请合理控制游戏时间。
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name: 'App',
      title:[
        {chi:"首页",eng:"HOME",url:"/index"},
        {chi:"资讯",eng:"NEWS",url:"/newsIndex"},
        {chi:"赛事",eng:"TOURNA",url:""},
        {chi:"互动",eng:"INTERACTION",url:""},
        {chi:"资料",eng:"DATA",url:""},
        {chi:"服务",eng:"SERVICE",url:""},
        {chi:"下载",eng:"DOWNLOAD",url:""}
      ],
      tnext:[
        ["品牌站","个人中心","神秘商店","玩家工坊"],
        ["官方新闻","赛事新闻","更新日志","游戏攻略"],
        ["职业赛季","赛事中心","赛事总览","赛事专题"],
        ["精彩综合","官方活动","玩家论坛","新浪微博","官方微信"],
        ["英雄资料","物品资料","自定义","新手引导"],
        ["客服中心","在线客服","自助专区","被盗找回","忘记账号","通行查询","网吧特权","家长监护"],
        ["游戏下载","精美壁纸","官方漫画"]
      ],
      tnexid:""
    }
  },
  methods: {
      tex(id){
          this.tnexid=id
          
      }
  },
}
</script>

<style>
.hbg{
    height: 80px;
    background: url("http://176.30.9.205:3000/img/w1.png");
    background-repeat: no-repeat;
}
.bgimg{
    background-image: url('http://176.30.9.205:3000/img/sbg.png');
    background-repeat: no-repeat;
}
.rbgimg{
    width: 50px;
    height: 50px;
    border:1px solid #999;
    border-radius: 50%;
    background: url('http://176.30.9.205:3000/img/w3.png') 12px -451px;
}
</style>
