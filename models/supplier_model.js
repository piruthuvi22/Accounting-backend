const mongoose = require("mongoose");

const suppliersModel = mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Address: {
    type: String,
  },
  PhoneNo: {
    type: String,
  },
});

module.exports = mongoose.model("Suppliers", suppliersModel);
