const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- MONGODB CONNECTION ---------------- */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

/* ---------------- SCHEMA ---------------- */

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

/* ---------------- ROUTE ---------------- */

app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.json({ success: true, message: "Message Saved" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

/* ---------------- SERVER ---------------- */

app.listen(5000, () => console.log("Server running on port 5000 🚀"));
