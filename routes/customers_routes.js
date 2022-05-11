const express = require("express");
const router = express.Router();

const Customers = require("../models/customers_model");

router.get("/get-customers", (req, res) => {
  Customers.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Get customers successfully");
      res.status(200).json(data);
    }
  });
});

router.post("/add-customer", (req, res) => {
  const req_body = req.body;
  const customer_doc = Customers({
    Name: req_body.Name,
    Email: req_body.Email,
    Address: req_body.Address,
    PhoneNo: req_body.PhoneNo,
  });

  customer_doc.save((err, document) => {
    if (err) res.status(501).json(err);
    {
      console.log("Customer added", document);
      res.status(200).json({ "Customer added": document });
    }
  });
});

router.delete("/delete-customer/:id", (req, res) => {
  let id = req.params.id;
  Customers.findByIdAndDelete({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Customer deleted");
      res.status(200).json("Customer deleted");
    }
  });
});


// get customers all id
router.get("/get-customers-id", (req, res) => {
  Customers.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Get customers id successfully");
      res.status(200).json(data);
    }
  });
});

module.exports = router;
