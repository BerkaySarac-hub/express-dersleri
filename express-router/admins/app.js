const express = require('express');
const router = express.router();

router.post("/products",(req,res,next)=>{
  res.send("you are in the products");
})

router.get("/add-product",(req,res,next)=>{
  res.send("you are in the add product")
})

module.exports = router;
