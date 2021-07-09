import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

// Collection name - "taskFour"
export const Users = mongoose.model("taskFour", userSchema);