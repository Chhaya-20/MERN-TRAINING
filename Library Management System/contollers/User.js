const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please enter all required fields");
  }
  try {
    result = await User.findOne({ email: email });
    if (result == null) {
      return res.status(400).send("Email id  does notexist  ");
    }
    if (result.password == password) {
      return res.status(200).send("Successfully Login ");
    } else {
      return res.status(400).send("Wrong password..");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server error");
  }
};

exports.SigninUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Please enter all required fields");
  }
  result = await User.findOne({ email: email });
  if (result) {
    return res.status(400).send("Email id Already exist  ");
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.redirect("/Home");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server error");
  }
};
