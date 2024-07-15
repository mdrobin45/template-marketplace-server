const BestSellingProduct = require("../../schema/bestSellingSchema");

const insertBestSellingProduct = async (req, res) => {
   try {
      const productId = req.body;
      await BestSellingProduct(productId).save();
      res.send("Id inserted").status(200);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = insertBestSellingProduct;
