const express = require('express');
const router = express.Router();
const {index , create} = require("../controllers/userController.js");

router.get("/", index);
router.post("/create", create);

module.exports = router;