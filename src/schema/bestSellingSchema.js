const mongoose = require("mongoose");

const bestSellingSchema = new mongoose.Schema(
   {
      template: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "Product",
      },
   },
   { timestamps: true }
);

const BestSellingProduct = mongoose.model("best-selling", bestSellingSchema);

module.exports = BestSellingProduct;
