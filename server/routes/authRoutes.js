const express = require("express");
const router = express.Router();
const { register, login, googleAuth, instagramAuth } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);
router.post("/instagram", instagramAuth);

module.exports = router;
