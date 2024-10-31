const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/reviews");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
