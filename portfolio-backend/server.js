const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- CORS ---------------- */
app.use(cors({
  origin: [
    "http://localhost:5173",               // local frontend
    "https://your-vercel-app.vercel.app"   // 🔁 replace with your Vercel URL
  ],
  methods: ["GET", "POST"],
}));

app.use(express.json());

/* ---------------- MONGODB CONNECTION ---------------- */
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("Mongo Error:", err));

/* ---------------- SCHEMA ---------------- */
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

/* ---------------- ROUTES ---------------- */

// Health check route (prevents "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.json({ success: true, message: "Message Saved" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
