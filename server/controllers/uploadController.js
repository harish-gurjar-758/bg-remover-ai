const axios = require("axios");
const path = require("path");

exports.removeBackground = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "../uploads", req.file.filename);
        const response = await axios.post("http://localhost:8000/remove-bg", {
            file_path: filePath
        });
        res.json(response.data);
    } catch (error) {
        console.error("Background removal error:", error.message);
        res.status(500).json({ error: "Background removal failed" });
    }
};

exports.enhanceQuality = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "../uploads", req.file.filename);
        const response = await axios.post("http://localhost:8000/enhance-image", {
            file_path: filePath
        });
        res.json(response.data);
    } catch (error) {
        console.error("Enhancement error:", error.message);
        res.status(500).json({ error: "Image enhancement failed" });
    }
};
