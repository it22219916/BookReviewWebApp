const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log("MongoDB connected successfully", { code: 200 });
  } catch (error) {
    console.error("MongoDB connection error:", {
      code: 500,
      message: error.message,
    });
    process.exit(1);
  }
};

module.exports = connectDB;
