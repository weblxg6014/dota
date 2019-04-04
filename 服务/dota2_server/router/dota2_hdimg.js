const pool=require('../pool.js')
const express=require('express')
var router=express.Router();
router.get('/hdimg',(req,res)=>{
    var sql="SELECT * FROM dota_hdimg"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
module.exports=router