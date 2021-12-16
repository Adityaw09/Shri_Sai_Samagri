import express from 'express';

import dotenv from 'dotenv';

const app = express();

import products from './data/products.js'

app.get("/api/products",(req , res)=>{
   res.json(products)
})


//Setting api for single product listning

app.get("/api/products/:id",(req ,res)=>{
    const product=products.find((p)=>p._id === req.params.id)
    //checking id in url and matching with json id
    res.json(product)
})

app.listen(5000, console.log(`server is running in 5000 mode on port 5000`))