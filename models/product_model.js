const mongoose = require("mongoose");

const productsModel = mongoose.Schema({
  Date: {
    type: String,
  },
  Supplier: {
    type: String,
  },
  Product: {
    type: String,
  },
  UnitPrice: {
    type: String,
  },
});

module.exports = mongoose.model("Products", productsModel);
