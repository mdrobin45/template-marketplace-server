const Product = require("../../schema/product");

const filterByCategory = async (req, res) => {
   try {
      const { category } = req.query;
      const result = await Product.find({ category: category });
      res.send(result);
   } catch {
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = filterByCategory;
