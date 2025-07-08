const express = require('express');
const router = express.Router();
const {index , create} = require("../controllers/productController.js");

router.get("/", index);
router.post("/create", create);

module.exports = router;