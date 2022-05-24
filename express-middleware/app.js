const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("middleware 1 çalıştırıldı");
    res.send("<h1>middleware 1 çalıştı</h1>")
    next();
})
app.use((req, res, next) => {
    console.log("middleware 2 çalıştırıldı");
    res.send("<h2>middleware 2 çalıştı</h2>") //clienta gönderilen bir response değiştirilemez
})

app.listen(3000, '127.0.0.1', () => {
    console.log(".")
    console.log("server is listening on 3000")
});