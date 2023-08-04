const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  console.log(req.body, "delete cust route");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${req.body.uuid}`,
    headers: {
      Authorization: `Bearer ${req.body.token}`,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
      res.json(response.data).status(200);
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: error }).status(500);
    });
});

module.exports = router;
