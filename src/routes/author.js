const express = require("express");
const insertAuthor = require("../controllers/author/insertAuthor");
const getAuthor = require("../controllers/author/getAuthors");
const authorRouter = express.Router();

// Get author by id
authorRouter.get("/", getAuthor);

// Insert author
authorRouter.post("/", insertAuthor);

// Export router
module.exports = authorRouter;
