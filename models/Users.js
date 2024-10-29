// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  designation: {
    type: String,
    required: true,
    enum: ["Employee", "HR Manager", "Department Head", "App Admin"],
    default: "Employee",
  },
  role: {
    type: String,
    enum: ["Employee", "HRManager", "DepartmentHead", "AppAdmin"],
    required: true,
    default: "Employee",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
});

// Check if the User model already exists
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User; // Only export the User model
