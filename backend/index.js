import express from "express";


const app=express();

app.listen(process.env.PORT,()=>{
    console.log(`Server running at PORT:${process.env.PORT}`);
})

