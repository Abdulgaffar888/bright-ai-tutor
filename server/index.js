// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

// allow frontend to talk to backend
app.use(cors());
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// example API route
app.get("/api/data", (req, res) => {
  res.json({ data: "This is backend data" });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
