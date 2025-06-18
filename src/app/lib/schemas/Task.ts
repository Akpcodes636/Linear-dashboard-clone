import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    project: {
      type: String,
      required: true,
      trim: true,
    },
    totalSubtasks: {
      type: Number,
      default: 0,
    },
    completedSubtasks: {
      type: Number,
      default: 0,
    },
    dueDate: {
      type: Date,
    },
    comments: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
