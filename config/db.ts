import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    console.log("connected database");
  } catch (err) {
    console.log("❌❌ MongoDB connection failed");
    process.exit(1);
  }
};

export default connectDB;
