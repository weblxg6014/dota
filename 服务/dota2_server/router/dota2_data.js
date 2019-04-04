const pool=require('../pool.js')
const express=require('express')
var router=express.Router()
router.get('/ndata',(req,res)=>{
    var dataid=req.query.dataid
    var sql="SELECT * FROM `dota_data` WHERE dataid="+dataid
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
module.exports=router