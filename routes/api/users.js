const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route GET api/users
// @desc Test route
// @access public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter valid email").isEmail(),
    check(
      "password",
      "please enter a password within 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("user route");
  }
);

module.exports = router;

//test
