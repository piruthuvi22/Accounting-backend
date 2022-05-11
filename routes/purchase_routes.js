const express = require("express");
const router = express.Router();

const Purchases = require("../models/purchase_model");
const Products = require("../models/product_model");

router.get("/get-purchases", (req, res) => {
  Purchases.find()
    .sort("Date")
    .exec((err, data) => {
      {
        if (err) {
          console.log(err);
          res.status(501).json(err);
        } else {
          console.log("Get purchases successfully");
          res.status(200).json(data);
        }
      }
    });
});

router.post("/add-purchase", (req, res) => {
  const req_body = req.body;
  const purchase_doc = new Purchases({
    InvoiceNo: req_body.InvoiceNo,
    Date: req_body.Date,
    Supplier: req_body.Supplier,
    Description: req_body.Description,
    Quantity: req_body.Quantity,
    UnitPrice: req_body.UnitPrice,
    Value: req_body.Value,
    TotalValue: req_body.TotalValue,
  });

  purchase_doc.save((err, document) => {
    if (err) res.status(501).json(err);
    {
      console.log("Purchase Saved", document);
      res.json({ "Purchase saved": document });
    }
  });
});

router.get("/get-supplier-products", (req, res) => {
  Products.findById(req.params._id, (err, data) => {
    if (err) {
      res.status(501).json(err);
    } else {
      console.log("Get supplier products successfully");
      console.log(data);
      res.status(200).json(data);
    }
  });
});
module.exports = router;