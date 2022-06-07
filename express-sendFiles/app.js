const express = require('express');
const path = require('path');
const app = express();

app.use("/main-page", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/index.html"))
    console.log("Kullanıcı ana sayfada kullanıcı bilgisi", req.ip);
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/errorPage.html"))
})

app.listen(3000, "127.0.0.1", (error) => {
    if (error) {
        console.log("Bir hata meydana geldi", error);
    }
    console.log("server working on 3000 port server : 127.0.0.1");
})