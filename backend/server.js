const express =require('express');
const app=express();
const cors=require('cors');

const port=3001;
const host='127.0.0.1';
const mongoose=require('mongoose');
const URI =
  "mongodb+srv://techphantoms23:D384ijGvwKdollR5@cluster0.nt5at.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const router=require('./router')
// mongodb+srv://nipundb:nipun1234@cluster0.btrta64.mongodb.net/?retryWrites=true&w=majority
// D384ijGvwKdollR5;
// techphantoms23;

app.use(cors());
app.use(express.json());
app.use('/api',router);



const connect=async()=>{
    try{
        await mongoose.connect(URI)
        console.log('Sucessfully Connected to MongoDB!!')

    }catch(error){
        console.log('mongodb error',error)

    }
}

connect();

const server=app.listen(port,host,()=>{
    console.log(`Node Server is listning to ${server.address().port}`)
});
