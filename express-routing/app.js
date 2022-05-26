const express = require('express');

const app = express();

app.use("/", (req, res, next) => {
    console.log("Default dizin routing middleware çalıştı....");
    //console.log("ve next methodu çalışıyor--- yoksa başka middleware çalışmaz ve routing olmaz");
    next();
})
app.use("/products", (req, res, next) => {
    res.send("<h1>Url slash karakterinden sonra products içerdiği için ben çalıştım olmasaydı default route middleware i çalışacaktı</h1>")
    
        //res.send("<h2>Ve ben next içermiyorum o yüzden başka middleware çalışmayacak</h2>")
})
app.use("/files", (req, res, next) => {
    res.send("<h2>Url slash karakterinden sorna files içerdiği için ben çalıştım olmasaydı default route middleware i çalışacaktı</h2")
        //res.send("<h3>Ve ben next içermiyorum o yüzden başka middleware çalışmayacak</h3>")
})
app.use("/", (req, res, next) => {
    res.send("en son çalışacak olan main route middleware çalıştı çünkü url sorgusunu yakalıyacak bir route middleware yoktu yada / dan sonra sorgu olmadı")
})

app.listen(3000, "127.0.0.1", (error) => {
    if (error) {
        console.log("hata geldi ve diyor ki :", error)
    }
    console.log("server 3000 numaralı portta ve 127.0.0.1 kimliğinde çalışıyor")
})
