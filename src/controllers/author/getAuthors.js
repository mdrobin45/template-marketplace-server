const Author = require("../../schema/authorSchema");

const getAuthor = async (req, res) => {
   try {
      const { id } = req.query;
      console.log(id);
      const result = await Author.findById(id).populate("templates");
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = getAuthor;
