const express = require("express");

const cleaningCont = require("../controllers/orderController");

const router = express.Router();

router.get("/", cleaningCont.getData);

router.post("/addOrder", cleaningCont.postData);

module.exports = router;
