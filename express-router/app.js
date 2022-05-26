const express = require('express');
const app = express();
const adminRouter = require("./admins/app")
const userRouter = require("./users/app")
    //route modulünün çağırılması ve kullanılması
app.use(adminRouter);

app.use("/", (req, res, next) => {
    res.send("you are in the main page");
})
app.use(userRouter);
app.listen(3000, '127.0.0.1', (error) => {
    if (error) {
        console.log("an error is arrived and it says :", error)
    }
    console.log("Server is working on 3000 PORT and Server is : 127.0.0.1")
})