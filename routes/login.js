const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

router.route("/").post(async (req, res) => {
  console.log(req.body);

  try {
    let resp = await axios.post(
      "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",
      {
        login_id: req.body.login_id,
        password: req.body.password,
      }
    );
    console.log(resp.data);
    res.json(resp.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
