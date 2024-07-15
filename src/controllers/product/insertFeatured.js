const FeaturedProducts = require("../../schema/featuredProducts");

const insertFeatured = async (req, res) => {
   try {
      const productId = req.body;
      await FeaturedProducts(productId).save();
      res.send("Id inserted").status(200);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

// Export module
module.exports = insertFeatured;
