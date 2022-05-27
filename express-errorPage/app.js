const express = require('express');

const app = express();

app.use("/posts", (req, res, next) => {
    res.send("<h1>Posts page</h1>")
});

app.use("/products", (req, res, next) => {
    res.send("<h1>Products Page</h1>")
});

// app.use("/", (req, res, next) => {
//     res.send("<h1>Main Page</h1>")
// })
app.use((req, res) => {
    res.status(404);
    res.send("Error Page");
});
app.listen(3000, "127.0.0.1", (error) => {
    if (error) {
        console.log("Bir hata meydana geldi : ", error);
    }
})
var a = document.gete("a")
a.style.position =