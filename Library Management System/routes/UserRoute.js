const express = require("express");
const router = express.Router();
const ctr = require("../contollers/User.js");

router.post("/login", ctr.LoginUser);
router.post("/signup",ctr.SigninUser);


module.exports = router;
