const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
  InvoiceNo: {
    type: String,
  },
  Date: {
    type: Date,
    default: new Date(),
  },
  Customer: {
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

module.exports = mongoose.model("Sales", salesSchema);
