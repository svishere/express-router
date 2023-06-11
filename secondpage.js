const express=require('express')
const router=express.Router()

router.get('/' ,(request,response)=>{
  response.send("This is Second Page")
})
router.get('/:id/:name' ,(request,response)=>{
  response.send("Passed Value is "+request.params.id+" Name is "+request.params.name)
})
module.exports=router;