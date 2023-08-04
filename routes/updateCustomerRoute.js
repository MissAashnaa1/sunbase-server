const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  // console.log(req.body, "update cust route");

  const axios = require("axios");
  let data = JSON.stringify({
    first_name: "Jane",
    last_name: "Doe",
    street: "Elvnu Street",
    address: "H no 2 ",
    city: "Delhi",
    state: "Delhi",
    email: "sam@gmail.com",
    phone: "12345678",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=${req.body.uuid}`,
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
      res.json({ success: true, rspns: response.data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, rspns: error });
    });
});

module.exports = router;
