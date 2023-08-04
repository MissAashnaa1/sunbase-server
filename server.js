// imports
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 5000;

// routes
const loginRoute = require("./routes/login");
const getAllCustomerRoute = require("./routes/getAllCustomersRoute");
const createCustomerRoute = require("./routes/createCustomerRoute");
const deleteCustomerRoute = require("./routes/deleteCustomerRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.get("/", (req, res) => {
  res.json({ msg: "testing" });
});
app.use("/login", loginRoute);
app.use("/get-customers/", getAllCustomerRoute);
app.use("/create-customer/", createCustomerRoute);
app.use("/delete-customer/", deleteCustomerRoute);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(port, (error) => {
  // if(!error) console.log("main--> Server running at port,", port);
  if (!error) console.log(`App listening at http://localhost:${port}`);
  else console.log("Error! ", error);
});
