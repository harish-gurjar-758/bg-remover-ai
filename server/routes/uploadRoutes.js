const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerConfig");
const { removeBackground, enhanceQuality } = require("../controllers/uploadController");

router.post("/remove-bg", upload.single("file"), removeBackground);
router.post("/enhance", upload.single("file"), enhanceQuality);

module.exports = router;