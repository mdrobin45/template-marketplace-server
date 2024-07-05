const express = require("express");
const insertProduct = require("../controllers/product/insertProduct");
const productRoute = express.Router();

// Insert product
productRoute.post("/insert", insertProduct);

// Export route
module.exports = productRoute;
