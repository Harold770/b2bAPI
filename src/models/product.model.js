const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    SKU: {
      type: String,
      unique: true,
      required: true,
    },
    'Product Name': {
      type: String,
      required: true,
    },
    Inventory: {
      type: Number,
      required: true,
    },
    Price: {
      type: String,
      required: false,
    },
    'Price Vip': {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
