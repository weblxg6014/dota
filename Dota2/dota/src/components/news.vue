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
                    <p class="small">您的位置 :&nbsp;</p>
                    <li class="breadcrumb-item"> 首页</li>
                    <li class="breadcrumb-item">新闻</li>
                    <li class="breadcrumb-item">{{title}}</li>
                </ul>
                <h3 class="mt-5 text-center">{{title}}</h3>
                <div class="text-center pt-3 pb-3">
                    <span>{{date | datetimeFilter}}</span>
                    <span>【字号: </span>
                        <a href="javascript:void(0);" @click="fsize(1)" >大</a>
                        <a href="javascript:;" @click="fsize(2)">中</a>
                        <a href="javascript:;" @click="fsize(3)">小</a>
                    <span>】</span>
                    <hr>
                </div>
                <div class="justify-content-between pl-5 pr-5" :class="size">
                    <p>{{text1}}</p>
                    <div class="text-center ">
                        <img :src="imgUrl1" class="mt-3 mb-4 divimg" alt="">
                    </div>
                    <p>
                        {{text2}}
                    </p>
                    <div class=text-center>
                        <img :src="imgUrl2" class="mt-3 mb-4 divimg" alt="">
                    </div>
                    <p>
                        {{text3}}
                    </p>
                    <div class="pb-5 mb-5 border-bottom">
                        <p class="font-weight-bold">赞助商 :</p>
                        <img src="http://176.30.9.205:3000/img/newimg/zzs.jpg" alt="">
                    </div>
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
            id:"",
            title:"",
            text1:"",
            text2:"",
            text3:"",
            imgUrl1:"",
            imgUrl2:"",
            date:"",
            size:"",
            divc:"",
            y:0
        }
    },    
    methods: {
         
        imgid(){
            this.id=this.$route.params.id
            var url="http://176.30.9.205:3000/newtext?id="+this.id
            this.axios.get(url).then(result=>{ 
                this.title=result.data[0].title
                this.date=result.data[0].new_date
                this.text1=result.data[0].new_header
                this.text2=result.data[0].new_text
                this.text3=result.data[0].new_footer
                this.imgUrl1=result.data[0].img_url
                this.imgUrl2=result.data[1].img_url
            })
        },
        fsize(size){
            if (size==1) {
                this.size="size1"
            }else if (size==2) {
                this.size="size2"
            }else if(size==3){
                this.size="size3"
            }
        },
        divv(e){
            this.y=pageYOffset
            // console.log(this.y);
            
           if(this.y>800){
               this.divc="d-block"
           }else{
               this.divc="d-none"
           }
        },
        // dnone(){
        //     this.divc="d-none"
        // },
        // goAnchor(selector) {       
        //     document.documentElement.scrollTop=0
        //     this.divc="d-none"
        // }
    },
    created() {
        
        // this.dnone()
        this.imgid()
    },
    watch: {
       $route(to){
           this.id=to.params.id
          this.imgid()
       }
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
.bgw{
    width: 80%
}
.bgd{
    background: #0a0e11
}
.breadcrumb-item{
    font-size: 14px;
}
.text-center a{
    color:#333
}
.divimg{
    width: 50rem;
}
.size1{
    font-size: 20px;
}
.size2{
    font-size: 16px;
}
.size3{
    font-size: 12px;
}
</style>
