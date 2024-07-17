const express = require("express");
const insertAuthor = require("../controllers/author/insertAuthor");
const authorRouter = express.Router();

// Insert author
authorRouter.post("/", insertAuthor);

// Export router
module.exports = authorRouter;
