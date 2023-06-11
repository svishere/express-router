const express=require('express')
const app=express()
const userPage=require('./user.js')
const servicePage=require('./service.js')
const secondPage=require('./secondpage.js')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>
{
  response.send("Boring Server")
})
app.use('/user',userPage);
app.use('/service',servicePage);
app.use('/second',secondPage)

app.listen(3500)