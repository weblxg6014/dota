const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
router.get('/lbimg',(req,res)=>{
    var sql="SELECT * FROM dota_lbimg"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
module.exports=router