const pool=require("../pool.js")
const express=require('express')
var router=express.Router()
router.get('/otherimg',(req,res)=>{
    var id=req.query.id
    var sql="SELECT * FROM other_img WHERE id="+id
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
module.exports=router