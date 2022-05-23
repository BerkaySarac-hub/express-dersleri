const express = require('express');

const app = express();
app.get("/", (req, res) => {
    res.send("main menu");
});
app.get("/app/product", (req, res) => {
    res.send("product list :")
})
app.listen(3000, '127.0.0.1', () => {

    console.log("server is listening on 3000")
});