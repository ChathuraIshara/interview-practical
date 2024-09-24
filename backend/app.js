const express =require('express');
const app=express();
const cors=require('cors');
const router=require('./router')
const bodyParser = require('body-parser');

const controller=require('./controller')


app.use(cors());
app.use(express.json());  

app.use(
    express.urlencoded({
        extended:true,
    }
        
    )
)




app.get("/users",(req,res,next)=>{
    controller.getUsers(req,res,next);
   

})
app.post("/createuser",(req,res,next)=>{
    // controller.addUser(req.body,(callback)=>{
    //     res.send();
    // });
    controller.addUser(req,res,next);

})
app.post("/updateuser",(req,res,next)=>{
    controller.updateUser(req,res,next);

})
app.post("/deleteeuser",(req,res,next)=>{
    controller.deleteUser (req,res,next);

})


app.get("/user",(req,res)=>{
    const id=req.query.id;
    controller.getusersById(id,(user)=>{
        res.send(user)
        

    })
})


module.exports=app;

