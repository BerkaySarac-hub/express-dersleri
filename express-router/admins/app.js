const express = require('express');
const router = express.Router();

router.post("/products", (req, res, next) => {
    res.send("you are in the products on the admins");
})

router.get("/add-product", (req, res, next) => {
    res.send("you are in the add product on the admins")
})

module.exports = router;