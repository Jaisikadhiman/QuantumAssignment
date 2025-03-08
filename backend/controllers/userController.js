const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const saltRounds = 10;
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const create = async (req, resp) => {
  const { name, email, password, dob } = req.body;
  console.log(req.body);
  const pass = await bcrypt.hash(password, saltRounds);
  const ans = await User.create({
    name,
    email,
    password: pass,
    dob,
  });

  ans.save();
  return resp.status(200).json({
    message: "user created",
    success: true,
    user: ans,
  });
};

const getUser = async (req, resp) => {
  const { id } = req.params;
  const data = await User.findById(id);
  if (!data) {
    return resp.status(200).json({
      message: "user not found",
      success: false,
      status: 400,
    });
  }
  if (data) {
    return resp.status(200).json({
      message: "data fetched",
      success: true,
      status: 200,
      user: data,
    });
  }
};


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validate email and password
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Validate password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
  
      return res.status(200).json({
        message: "Login successful",
        success: true,
        status:200,
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = { create, getUser ,login};
