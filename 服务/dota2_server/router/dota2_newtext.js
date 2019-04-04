const pool=require('../pool.js')
const express=require('express')
var router=express.Router()
router.get('/newtext',(req,res)=>{
    var id=req.query.id
    var sql="SELECT * FROM dota_newimg,dota_newText WHERE imgId=? AND textid=?"
    pool.query(sql,[id,id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
module.exports=router