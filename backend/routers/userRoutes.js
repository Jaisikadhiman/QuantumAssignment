const express = require("express");
const {
  upload,
  create,
  getAll,
  getUser,
  login,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/register", create);
router.post("/login", login);
router.get("/getuser/:id", getUser);
module.exports = router;
