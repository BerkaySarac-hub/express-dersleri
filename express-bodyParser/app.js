const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/add-product",(req,res,next)=>{
  res.send(`
    <html>
        <head>
            <title>EXPRESS BODY PARSİNG - EXAMPLE ADD PRODUCT</title>
        </head>
        <body>
        <form action="/product" method="POST">
            <input type="text" name="addProduct">
            <input type="submit" value="add Product">
        </form>
        </body>
    </html>
    `)
})

app.post("/product",(req,res,next)=>{
  console.log(req.body);
  res.redirect("/");
})

app.listen(3000,'127.0.0.1',(error)=>{
  if(error){
    console.error("an error has been arrived",error)
  }
  console.log("SERVER RUNNİNG ON PORT : 3000 SERVER : 127.0.0.1")
})
