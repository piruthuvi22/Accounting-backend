const express = require("express");
const router = express.Router();

const Suppliers = require("../models/supplier_model");
const Products = require("../models/product_model");

router.get("/get-products", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Get products successfully");
      res.status(200).json(data);
    }
  });
});

router.post("/add-product", (req, res) => {
  const req_body = req.body;
  const product_doc = Products({
    Date: req_body.Date,
    SupplierID: req_body.SupplierID,
    Supplier: req_body.Supplier,
    Product: req_body.Product,
    UnitPrice: req_body.UnitPrice,
  });

  product_doc.save((err, document) => {
    if (err) res.status(501).json(err);
    {
      console.log("Product added", document);
      res.status(200).json({ "Product added": document });
    }
  });
});

router.delete("/delete-product/:id", (req, res) => {
  let id = req.params.id;
  Products.findByIdAndDelete({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Product deleted");
      res.status(200).json("Product deleted");
    }
  });
});

//Get supplier's products
router.get("/get-supplier-data/:id", (req, res) => {
  const id = req.params.id;
  Products.find({ SupplierID:id }, (err, data) => {
    if (err) {
      res.status(501).json(err);
    } else {
      console.log("Get supplier's products successfully");
      console.log(data);
      res.status(200).json(data);
    }
  });
});

router.get("/get-product-data/:id", (req, res) => {
  const id = req.params.id;
  Products.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(501).json(err);
    } else {
      console.log("Get products's data successfully");
      console.log(data);
      res.status(200).json(data);
    }
  });
});

module.exports = router;
