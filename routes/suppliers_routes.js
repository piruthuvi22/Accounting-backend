const express = require("express");
const router = express.Router();

const Suppliers = require("../models/supplier_model");

router.get("/get-suppliers", (req, res) => {
  Suppliers.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Get suppliers successfully");
      res.status(200).json(data);
    }
  });
});

router.post("/add-supplier", (req, res) => {
  const req_body = req.body;
  const supplier_doc = Suppliers({
    Name: req_body.Name,
    Email: req_body.Email,
    Address: req_body.Address,
    PhoneNo: req_body.PhoneNo,
  });

  supplier_doc.save((err, document) => {
    if (err) res.status(501).json(err);
    {
      console.log("Supplier added", document);
      res.status(200).json({ "Supplier added": document });
    }
  });
});

router.delete("/delete-supplier/:id", (req, res) => {
  let id = req.params.id;
  Suppliers.findByIdAndDelete({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Supplier deleted");
      res.status(200).json("Supplier deleted");
    }
  });
});


// get particular supplier name
router.get("/get-supplierById/:id", (req, res) => {
  let id = req.params.id;
  Suppliers.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(501).json(err);
    } else {
      console.log("Get supplier ID successfully");
      res.status(200).json(data.Name);
    }
  });
});

module.exports = router;
