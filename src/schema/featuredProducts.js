const mongoose = require("mongoose");

const featuredProductSchema = new mongoose.Schema(
   {
      template_id: { type: mongoose.Schema.Types.ObjectId, required: true },
   },
   { timestamps: true }
);

const FeaturedProducts = mongoose.model(
   "featuredProducts",
   featuredProductSchema
);

module.exports = FeaturedProducts;
