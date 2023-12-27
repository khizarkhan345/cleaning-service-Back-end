const express = require("express");

const personalCont = require("../controllers/customerController");

const router = express.Router();

router.get("/", personalCont.getData);

router.post("/addCustomer", personalCont.postData);

module.exports = router;
