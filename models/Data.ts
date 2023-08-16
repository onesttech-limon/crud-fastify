import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model("Data", dataSchema);
