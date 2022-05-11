const mongoose = require("mongoose");

const customersModel = mongoose.Schema({
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

module.exports = mongoose.model("Customers", customersModel);
