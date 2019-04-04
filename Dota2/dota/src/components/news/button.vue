<template>
    <div>
        <div id="div1">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="div2" class="mt-4">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div id="div3" @click="goAnchor('#anchor');dnone()" :class="divc"  ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },    
    methods: {
        goAnchor(selector) {       
            document.documentElement.scrollTop=0
        },
        // diivv(e){
        //     this.b=pageYOffset
        //     console.log(this.y);
            
        //    if(this.b>800){
        //        this.divb="d-block"
        //    }else{
        //        this.divb="d-none"
        //    }
        // //    console.log(this.divc);
           
        // },
       
        dnone(){
            
            this.divc="d-none"
            
        },
    },
    created() {

    },
    props:{
        
        y:{
            type:Number,
            required:true
        },
        divc:{
            type:String,
            required:true
        }
    }

}
</script>

<style>
#div1 div{
    width: 240px;
    height: 82px;
    margin-left: 1rem;
    margin-top: 1rem;
}
#div1>div:first-child{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -10px;
}
#div1>div:first-child:hover{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -114px;
}
#div1>div:first-child+div{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -217px;
}
#div1>div:first-child+div:hover{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -321px;
}
#div1>div:last-child{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -425px;
}
#div1>div:last-child:hover{
    background:url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -529px;
}

#div2 div{
    width: 238px;
    height: 75px;
    margin-left: 1rem;
    margin-top: 0.5rem;
    border: 1px solid #122;
    transition: 500ms;
}
#div2 div:hover{
    border:1px solid #02baf6
}
#div2>div:first-child{
    background: url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -713px;
}
#div2>div:first-child+div{
    background: url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -809px;
}
#div2>div:last-child{
    background: url(http://176.30.9.205:3000/img/newimg/icon.png) -13px -907px;
}
#div3{
    width: 52px;
    height: 52px;
    background: url(http://176.30.9.205:3000/img/newimg/icon1.png) -15px -159px;
    position: fixed;
    left: 92rem;
    top: 45rem;
}
#div3:hover{
    background: url(http://176.30.9.205:3000/img/newimg/icon1.png) -15px -239px;
}
</style>
