const express = require("express");
const router = express.Router();

const Sales = require("../models/sales_model");

router.get("/get-sales", (req, res) => {
  Sales.find()
    .sort("Date")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(501).json(err);
      } else {
        console.log("Get sales successfully");
        res.status(200).json(data);
      }
    });
});

router.post("/add-sale", (req, res) => {
  const req_body = req.body;
  const sales_doc = new Sales({
    InvoiceNo: req_body.InvoiceNo,
    Date: req_body.Date,
    CustomerID: req_body.CustomerID,
    Customer: req_body.Customer,
    Description: req_body.Description,
    Quantity: req_body.Quantity,
    UnitPrice: req_body.UnitPrice,
    Value: req_body.Value,
    TotalValue: req_body.TotalValue,
  });

  sales_doc.save((err, document) => {
    if (err) res.status(501).json(err);
    {
      console.log("Sale Saved", document);
      res.json({ "Sale saved": document });
    }
  });
});

router.delete("/delete-sale/:id", (req, res) => {
  let id = req.params.id;
  Sales.findByIdAndDelete({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Sale deleted");
      res.status(200).json("Sale deleted");
    }
  });
});

module.exports = router;
