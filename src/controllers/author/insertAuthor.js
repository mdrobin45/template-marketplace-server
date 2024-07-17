const Author = require("../../schema/authorSchema");

const insertAuthor = async (req, res) => {
   try {
      const authorInfo = req.body;
      console.log(authorInfo);
      const result = await Author(authorInfo).save();
      res.status(200).json({ message: "Author inserted", id: result._Id });
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = insertAuthor;
