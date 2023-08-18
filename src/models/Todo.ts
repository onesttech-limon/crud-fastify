import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
    null: false,
  },
});

export default mongoose.model("Todo", todoSchema);
