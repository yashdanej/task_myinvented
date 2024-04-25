const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const { upload } = require("../utils/upload");

router
    .get("/filter", productController.Filter)

module.exports = router;