const express = require("express");

const cleaningCont = require("../controllers/orderController");

const router = express.Router();

router.get("/", cleaningCont.getData);

router.post("/addOrder", cleaningCont.postData);
router.put("/changeOrder/:id", cleaningCont.changeOrder);

module.exports = router;
