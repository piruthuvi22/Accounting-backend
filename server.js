const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const purchase_routes = require("./routes/purchase_routes");
const customers_routes = require("./routes/customers_routes");
const sales_routes = require("./routes/sales_routes");
const suppliers_routes = require("./routes/suppliers_routes");
const products_routes = require("./routes/products_routes");

const app = express();

// const MONGO_URI = "mongodb://localhost:27017/Accounts";
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/purchases", purchase_routes);
app.use("/sales", sales_routes);
app.use("/customers", customers_routes);
app.use("/suppliers", suppliers_routes);
app.use("/products", products_routes);

app.get("/", (req, res) => {
  res.status(200).send("Server running at port " + PORT);
});

mongoose.connect(MONGO_URI, (err) => {
  if (err) console.log(err);
  console.log("DB connection established");
});
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
