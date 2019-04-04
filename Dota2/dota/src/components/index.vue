<template>
    <div>
            <!-- 轮播 -->
            <div id="demo" class="carousel slide carousel-fade " data-ride="carousel">
                <!-- 指示符 -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" v-for="item in llbimg" :key="item.id" :data-slide-to="item.id-1" :class="item.id==1?'active':'' "></li>
                </ul>
                <!-- 轮播图片 -->
                <div class="carousel-inner">
                    <div class="carousel-item" :class="item.id==1?'active':''" :id="'d'+item.id" v-for="item of llbimg" :key="item.id"><a href="javascript:;"><img :src="item.img_url" alt=""></a></div>
                </div>
                <!-- 左右按钮 -->
                <a href="#demo" class="carousel-control-prev " data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
                <a href="#demo" class="carousel-control-next " data-slide="next"><span class="carousel-control-next-icon"></span></a>
            </div>
            <div class="container">
            <!-- 功能按钮 -->
                <div class="d-flex justify-content-between">
                    <!-- 左 -->
                    <div>
                        <!-- 充值按钮 -->
                        <div id="d1"  class="d-flex">
                            <div v-for="(item,span) in 3" :key="span"></div>
                        </div>
                        <!-- 新闻中心 -->
                        <div class="d-flex justify-content-between mt-5" >
                            <p class="text-white ml-1">新闻中心</p>
                            <span >
                                <a href="javascript:;" class="small pr-1">更多 &#9992;</a>
                            </span>
                        </div>
                        <!-- 按钮切页 -->
                        <div class="d-flex " id="apc">
                            <div  :class="span==0?'u-active':''" @click="otherImg(span+1),dotaswitch(span)" v-for="(item,span) in nButton" :key="span" >{{item}}</div>
                        </div>
                        <!-- 新闻列表 -->
                        <div class="js mt-4">
                            <!-- 上半部分 -->
                            <div class="jsul">
                                <!-- 综合新闻 -->
                                <div>
                                    <a href="javascript:;" class="a1" v-for="item of oimg" :key="item.id">
                                        <h3 class="mt-3 text-center" :class="item.id==3?'d-none':''" >{{item.title}}</h3>
                                        <div class="d-flex" >
                                            <div class="d1 bg-white ml-4 mr-3 mb-3" :class="item.id==3?'d-none':''">
                                                <img :src="item.img_url" alt="" class="m-0">
                                            </div>
                                            <div class="d2">
                                                <p class="small mr-5" >
                                                    {{item.dota_text}}
                                                </p>
                                                <span :class="item.id==3?'d-none':''">{{item.dota_data|datetimeFilter}}</span>
                                            </div>
                                        </div>
                                    </a>
                                    <ul class="list1 mt-3 list-unstyled">
                                        <li v-for="item of nData" :key="item.id" :class="item.id%2==0?'bg-lis':''">
                                            <router-link :to="'/news/'+item.id" href="javascript:;" class="d-block d-flex justify-content-between cl9 pt-2 pb-2 pl-3 pr-4">
                                                <span >{{item.title}}</span>
                                                <span >{{item.dota_date|datetimeFilter}}</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 下半部分 -->
                            <div>
                                <!-- 活动中心 -->
                                <div class="row mt-5">
                                    <div class="col-3">
                                        <p class="text-white ml-1 mb-0">活动中心</p>
                                    </div>
                                    <ul class="col-9 d-flex justify-content-between list-unstyled tab text-center cl9 mb-0">
                                        <li>官方活动</li>
                                        <li>赛事活动</li>
                                        <li>推广活动</li>
                                        <li>商城特选</li>
                                    </ul>
                                </div>
                                <!-- 活动中心图片区 -->
                                <div class="ur mb-5">
                                    <div class="row justify-content-center">
                                        <div class="col-5 mr-4 mt-5" v-for="item in hdimg" :key="item.id">
                                            <a href="javascript:;">
                                                <img :src="item.img_url" alt="">
                                                <p>{{item.title}}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 右 -->
                    <div class="ml-4">
                        <!-- 功能按钮 -->
                        <div class="d-flex" id="d2">
                            <div v-for="(item,span) in 3" :key="span"></div>
                        </div>
                        <!-- 近期热点 -->
                        <div class="mt-5">
                            <p class="text-white ml-1">新闻中心</p>
                        </div>
                        <!-- 近期热点图片 -->
                        <div >
                            <a href="javascript:;" v-for="item of bimg" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </a>
                        </div>
                        <!-- 赛事中心 -->
                        <div class="d-flex justify-content-between mt-4">
                            <p class="text-white ml-1">赛事中心</p>
                            <span>
                                <a href="javascript:;" class="small pr-1">更多 &#9992;</a>
                            </span>
                        </div>
                        <!-- 赛事轮播 -->
                        <div id="s1" class="carousel slide carousel-fade " data-ride="carousel">
                            <!-- 指示符 -->
                                <ul class="carousel-indicators">
                                    <li v-for="(item,span) in lbimg" :key="span" data-target="#s1" :data-slide-to="span" :class="item.id==1?'active':''"></li>
                                </ul>
                                <!-- 轮播图片 -->
                                <div class="carousel-inner">
                                    <div class="carousel-item" v-for="item of lbimg" :class="item.id==1?'active':''" :key="item.id" id="d0">
                                        <a href="javascript:;"><img :src="item.img_url" alt="">
                                        </a>
                                    </div>
                                </div>
                        </div>
                        <!-- 版本轮播 -->
                        <div class="position-relative c2">
                            <div class="d-flex justify-content-between mt-4">
                                <p class="text-white ml-1">赛事中心</p>
                                <span>
                                    <a href="javascript:;" class="small pr-1">更多 &#9992;</a>
                                </span>
                            </div>
                            <div class="position-relative position-absolute c1">
                                <div v-for="item of bbimg" :key="item.id" :id="'b'+item.id" :class="'sbcq'+item.id" data-id="1">
                                    <img :src="item.img_url" alt="">
                                    <a href="#">
                                        <p class="bg-dark">{{item.title}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- 图片控制li -->
                        <div class="as">
                            <ul class="d-flex list-unstyled u1">
                                <li v-for="item of bbimg" :key="item.id" :class="item.id==1?'lg':''" :id="item.id"></li>
                            </ul>
                        </div>
                        <!-- 客服中心 -->
                        <div>
                            <div class="d-flex justify-content-between mt-4">
                                <p class="text-white ml-1">赛事中心</p>
                                <span>
                                    <a href="javascript:;" class="small pr-1">更多 &#9992;</a>
                                </span>
                            </div>
                            <div class="as">
                                <input type="text" placeholder="请输入要搜索的问题" class="ac">
                                <button class="btn btn-danger mb-2 p-1">搜索</button>
                                <button class="btn btn-info ml-3 mb-2 p-1">我要提问</button>
                            </div>
                            <div class="as">
                                <p>常见问题</p>
                                <div>
                                    <ul>
                                        <li v-for="item of proBlem" :key="item.id"><a href="#">{{item.title}}</a></li>
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            hdimg:[],
            llbimg:[],
            lbimg:[],
            bbimg:[],
            nButton:["综合新闻","官方新闻","赛事新闻","更新日志"],
            nData:[],
            oimg:[],
            bimg:[],
            proBlem:[]
        }
    },    
    methods: {
        dotaHdimg(){
            var url="http://176.30.9.205:3000/hdimg"
            this.axios.get(url).then(result=>{
                this.hdimg=result.data
                // console.log(this.hdimg);
            })
        },
        dotaLlbimg(){
            var url="http://176.30.9.205:3000/llbimg"
            this.axios.get(url).then(result=>{
                this.llbimg=result.data
            })
        },
        dotaLbimg(){
            var url="http://176.30.9.205:3000/lbimg"
            this.axios.get(url).then(result=>{
                this.lbimg=result.data
            })
        },
        dotaBbimg(){
            var url="http://176.30.9.205:3000/bbimg"
            this.axios.get(url).then(result=>{
                this.bbimg=result.data
            })
        },
        dotaswitch(i){
            var n=i+1
            var url="http://176.30.9.205:3000/ndata?dataid="+n
            this.axios.get(url).then(result=>{
                this.nData=result.data  
            })
        },
        otherImg(id){
            var url="http://176.30.9.205:3000/otherimg?id="+id
            this.axios.get(url).then(result=>{
                this.oimg=result.data
            })
        },
        bImg(){
            var url="http://176.30.9.205:3000/otherimg?id=3"
            this.axios.get(url).then(result=>{
                this.bimg=result.data
            })
        },
        problem(){
            var url="http://176.30.9.205:3000/problem"
            this.axios.get(url).then(result=>{
                this.proBlem=result.data
            })
        }
        
    },
    created() {
        this.dotaHdimg()
        this.dotaLlbimg()
        this.dotaLbimg()
        this.dotaBbimg()
        this.dotaswitch(0)
        this.otherImg(1)
        this.bImg()
        this.problem()

    },
}
</script>

<style>
body{
    background-image: url(../../img/Official/bg1.png)
}
 #d1>div:first-child{
  background:url(../../img/Official/w12.png) 0 0;
}
#d1>div:first-child:hover{
  background:url(../../img/Official/w12.png) 0 -93px;
}
#d1>div:last-child{
  background:url(../../img/Official/w12.png) 250px 0;
}
#d1>div:last-child:hover{
  background:url(../../img/Official/w12.png) 250px -93px;
}
#d1>div:first-child+div{
  background:url(../../img/Official/w12.png) 500px 0;
}
#d1>div:first-child+div:hover{
  background:url(../../img/Official/w12.png) 500px -93px;
}

#d2>div:first-child{
  background: url(../../img/Official/w13.png) 0 0;
}
#d2>div:first-child:hover{
  background: url(../../img/Official/w13.png) 0 -96px;;
}
#d2>div:first-child+div{
  background: url(../../img/Official/w13.png) 140px 0;
}
#d2>div:first-child+div:hover{
  background: url(../../img/Official/w13.png) 140px -96px;
}
#d2>div:last-child{
  background: url(../../img/Official/w13.png) 281px 0;
}
#d2>div:last-child:hover{
  background: url(../../img/Official/w13.png) 281px -96px;
}
</style>
