const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
  InvoiceNo: {
    type: String,
  },
  Date: {
    type: Date,

  },
  Supplier: {
    type: String,
  },
  Description: {
    type: String,
  },
  Quantity: {
    type: String,
  },
  UnitPrice: {
    type: String,
  },
  Value: {
    type: String,
  },
  TotalValue: {
    type: String,
  },
});

module.exports = mongoose.model("Purchases", purchaseSchema);
