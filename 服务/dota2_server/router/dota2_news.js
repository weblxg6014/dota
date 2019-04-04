const pool=require('../pool.js')
const express=require('express')
var router=express.Router()
router.get('/news',(req,res)=>{
    var nid=req.query.nid
    var link=parseInt(req.query.link)

    var sql=`SELECT * FROM dota_news WHERE nId=${nid} LIMIT ${(link-1)*8},8`
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
module.exports=router