const User = require("../models/UserModel");

const bcrypt = require('bcrypt');

//login user
exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please enter all required fields");
  }
  try {
    result = await User.findOne({ email: email });
    if (result == null) {
      return res.status(404).json({
        sucess: false,
        message: "user is not registered with the provided email!",
      });
    }
    if (await bcrypt.compare(password,result.password)) {
      res.status(200).json({
        success: true,
        message: "User logged in successfully!!",
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Password incorrect!!",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server error");
  }
};

//signin user
exports.SigninUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success:false,
      message:"Please fill all the details careffully"
    })
  }
  result = await User.findOne({ email: email });
  if (result) {
    return res.status(400).json(
        {
            sucess:false,
            message:'user already exists'
        }
    );
  }
   let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password,10);
    const user = new User({name,email, hashedPassword});
    await user.save();
    
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server error");
  }
};
