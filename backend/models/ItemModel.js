const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Item Schema
const itemSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    itemId: {
      type: String,
    },
    quantityOnStock: {
      type: Number,
    },
  },
  {
    timestamp: true,
  }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
