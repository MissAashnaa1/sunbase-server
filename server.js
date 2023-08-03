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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/login", loginRoute);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(port, (error) => {
  // if(!error) console.log("main--> Server running at port,", port);
  if (!error) console.log(`App listening at http://localhost:${port}`);
  else console.log("Error! ", error);
});
