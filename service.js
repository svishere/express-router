const express=require('express')
const router= express.Router()
const listOfService=[{"id":1,
"Name":"Web development"}
,{
  "id":2,
  "Name":"App development"
},
{
  "id":3,
  "Name":"Digital Marketing"
}]
router.get('/',(request,response)=>{
  response.send("This Is Service Page");
})

router.get('/:id',(request,response)=>{
  const serviceId=Number(request.params.id)
  const getService=listOfService.find((service)=>service.id===serviceId)
  if(!getService){
    response.status(500).send("Expected service not Found")
    console.log(request.params.id);
  }
  else{
    response.json(getService)
  }
})

module.exports=router