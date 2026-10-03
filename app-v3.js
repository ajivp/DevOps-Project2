const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("DevOps Project 2 - Canary v3.0 is Running!! VOILA");
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
