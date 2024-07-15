const express = require("express");
const insertProduct = require("../controllers/product/insertProduct");
const getProducts = require("../controllers/product/getProducts");
const filterByCategory = require("../controllers/product/filterByCategory");
const featuredProducts = require("../controllers/product/featuredProducts");
const insertFeatured = require("../controllers/product/insertFeatured");
const productRoute = express.Router();

// Get all products
productRoute.get("/", getProducts);

// Filter by category
productRoute.get("/filter", filterByCategory);

// Featured products
productRoute.get("/featured", featuredProducts);

// Insert feature product id
productRoute.post("/insert-featured", insertFeatured);

// Insert product
productRoute.post("/insert", insertProduct);

// Export route
module.exports = productRoute;
