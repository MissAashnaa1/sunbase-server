const express = require("express");
const router = express.Router();
const axios = require("axios");

router.route("/:token").get(async (req, res) => {
  console.log("hrre");
  console.log(req.body);
  console.log(req.params);
  const axios = require("axios");

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list",
    headers: {
      Authorization: `Bearer ${req.params.token}`,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.json({ success: true, list: response.data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ success: false, list: null });
    });
});

module.exports = router;
