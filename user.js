const express = require('express')
const router=express.Router()


router.get('/',(req,res)=>{
  res.send("List of Users")
})
router.get('/new',(req,res)=>{
  // res.send('New user registration')
  res.render('new')
})
router.post('/',(req,res)=>{
  const isAvailable=true;
  if(isAvailable){
    Users.push({name:req.body.servicename})
  console.log(req.body.servicename);
  console.log(Users.length);
  // res.json(Users)
   res.redirect(`/user/${Users.length-1}`)
  }
  else{
    console.log("Error");
    res.redirect('/new')
  }
})
router.route('/:id')
    .get((req,res)=>{
const userId=Number(req.params.id)

if(userId<=USERS_ARRAY_LENGTH){
  res.send(`${req.user.name}`)
}
  else{
  res.send(`Invalid Number!`)
  }
})

const Users=[
  {
    name:'Web DevelopMent'
  },
  {
    name:"App development"
  }
  ,
  {
    name:"Full stack development"
  },
{
  name:"Mern Full Stack"
}
,{
  name:"Java full stack"
}
]
const USERS_ARRAY_LENGTH=Users.length;
router.param('id',(request,response,next,id)=>{
  
  request.user = Users[id]
  next();
})
module.exports=router