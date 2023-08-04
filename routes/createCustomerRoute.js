const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  console.log(req.body);

  let data = JSON.stringify({
    first_name: req.body.fName,
    last_name: req.body.lName,
    street: req.body.street,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    phone: req.body.phone,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create",
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
});

module.exports = router;
