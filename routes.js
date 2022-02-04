var express = require('express');
var router = express.Router();
var employ = require('./Models/Employees')



//api to fetch data
router.get('/employees',async(req,res)=>{
    const stud = await employ.find()
    res.send(stud)
})



//api to add data
router.post("/employees",async(req,res)=>{
    const emp = new employ({
        name:req.body.name,
        designation:req.body.designation
    })
    await emp.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



// api for updating
router.patch('/employees/:id',async (req,res)=>{
    const emp = await employ.findOne({_id:req.params.id})
    emp.name = req.body.name
    emp.designation = req.body.designation
    await emp.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })
})



//delete api
router.delete("/employees/:name",async(req,res)=>{
    await employ.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })
})
module.exports = router 