const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc Test route
// @access public
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("user route");
});

module.exports = router;

//test
