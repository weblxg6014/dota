<template>
    <div @mousewheel="divv($event)">
        <div  class="bgd">
            <a href="javascript:;" class="d-block">
                <img src="http://176.30.9.205:3000/img/news/bg2.png" class="timg" alt=""  id="anchor">
            </a>
        </div>
        <div class="container d-flex justify-content-between">
            <div class="bg-white bgw" >
                <ul class="breadcrumb pt-4 pb-1">
                    <h3 class="ml-3 pb-2 mr-5">新闻中心</h3>
                    <p class="small mt-2">您的位置 :&nbsp;</p>
                    <li class="breadcrumb-item mt-2"> 首页</li>
                    <li class="breadcrumb-item mt-2">新闻</li>
                </ul>
                <div class="d-flex t justify-content-center position-relative">
                    <div v-for="item of tImg" :key="item.id" :class="'ptpr'+item.id">
                        <a href="javascript:;">
                            <img :src="item.img" alt="">
                            <span :class="'ptp'+item.id" class="position-absolute d-block">{{item.title}}</span>
                        </a>
                    </div>
                </div>
                <ul class="d-flex list-unstyled ul1 justify-content-center mt-5 mb-5">
                    <li><a href="javascript:;">综合新闻</a></li>
                    <li><a href="javascript:;">官方新闻</a></li>
                    <li><a href="javascript:;">赛事新闻</a></li>
                    <li><a href="javascript:;">更新日志</a></li>
                    
                </ul>
                <div class="n1 d-flex ml-4 mr-4 mt-3 mb-1" v-for="item of nimg" :key="item.id">
                        <div class="ndiv">

                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            <h4 class="text-center">{{item.title}}</h4>
                            <p class="p2 ">{{item.news}}</p>
                            <p class="p3 text-right mb-0">{{item.news_date | datetimeFilter}} </p>
                        </div>
                    
                </div>
                <div class="text-center mb-3 mt-3">
                    <a href="javascript:;" class="btn btn-dark" @click="parent(-1)">上一页</a>
                    <a href="javascript:;" class="btn btn-dark" @click="apr(span+1)" v-for="(item,span) of a" :key="span">{{span+1}}</a>
                    <a href="javascript:;" class="btn btn-dark" @click="parent(1)">下一页</a>
                </div>
            </div>
            
            <div>
                   <dota-button :y="y" :divc="divc"></dota-button>
            </div>
        </div>
    </div>
</template>

<script>
import dotaButton from './news/button'
export default {
    data() {
        return {
            divc:"d-none",
            y:0,
            tImg:[],
            link:1,
            nimg:[],
            a:3
        }
    },
    methods: {
        divv(e){
            this.y=pageYOffset
            // console.log(this.y);
            
           if(this.y>800){
               this.divc="d-block"
           }else{
               this.divc="d-none"
           }
        },
        timg(){
            var url="http://176.30.9.205:3000/news?nid=1&link=1"
            this.axios.get(url).then(result=>{
                this.tImg=result.data
                // console.log(this.tImg);
            })
        },
        ntimg(){
            var url="http://176.30.9.205:3000/news?nid=2&link="+this.link
            this.axios.get(url).then(result=>{
                // console.log(result);
                this.nimg=result.data
            })
            
        },
        parent(i){
            this.link+=i
            if (this.link<1) {
                this.link=1
            }else if (this.link>4) {
                this.link=3
            }
            this.ntimg()
        },
        apr(i){
            this.link=i
            this.ntimg()
        }
        
    },
    created() {
        this.timg()
        this.ntimg()
    },
    components:{
        dotaButton
    }
}
</script>

<style>
body{
    background-image: url(../../img/Official/bg1.png)
}
.timg{
    margin-left:14% 
}
.bgd{
    background: #0a0e11
}
.bgw{
    width: 80%
}
.breadcrumb-item{
    font-size: 14px;
}
.t img{
    width: 415px;
    height: 244px;
}
.ptp1{
 left: 7rem;
 top:13rem;

}
.ptpr1{
    margin-right:1rem 
}
.ptpr2{
    margin-left: 1rem
}
.ptp2{
    right:8rem;
    top:13rem;
    
}
.ul1 li{
    padding:5px 4.67rem;
    border:1px solid #999
}
.ul1 li:hover{
    border:1px solid #f6f
}
.ul1 li a{
    color:#333;
}
.n1{
    padding: 1rem;
    
    border:1px solid #fff;
    transition: 500ms
}
.n1:hover{
    border:1px solid #0ff;
}
.ndiv img{
    width: 230px;
    height: 135px;
}
.p1{
    font-size: 20px;
}
.p2{
    font-size: 14px;
    padding:0 2rem;
}
.p3{
    color:#999;
    /* align-content: flex-start; */
}
</style>