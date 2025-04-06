const userModel = require("../models/userModel");
const { sendSuccess, sendError } = require("../helpers/responseHelper");
const bcrypt = require('bcryptjs');

// Create user
exports.createUser = async (req, res) => {
  const { name, email,password, age } = req.body;
  try {
    const [[user]]=await userModel.getUserByEmail(email);
    if(user)
    {
        sendError(res,'Email already exist.!');
    }
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    const result = await userModel.createUser(name, email, hashedPassword, age);
    sendSuccess(res, "User created successfully", { id: result.insertId });
  } catch (err) {
    sendError(res, "Failed to create user", err); // Error response
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    if(users.length>0){
        sendSuccess(res, "Users fetched successfully", users[0]);
    }
  } catch (err) {
    sendError(res, "Failed to fetch users", err);
  }
};

exports.getProfileUser = async (req, res) => {
   
    const id = req.user.id;
    try {
      const [result] = await userModel.getSingleUser(id);
      if (result.affectedRows === 0) {
          sendError(res, "User not found");
      }
      sendSuccess(res, "User profile.", result[0]);
    } catch (err) {
      sendError(res, "Failed to fetch user", err);
    }
  };

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.getSingleUser(id);
    if (result.affectedRows === 0) {
        sendError(res, "User not found");
    }
    sendSuccess(res, "Users fetched successfully", result[0]);
  } catch (err) {
    sendError(res, "Failed to fetch user", err);
  }
};

// Update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const result = await userModel.updateUser(id, name, email, age);
    if (result.affectedRows === 0) {
      sendError(res, "User not found");
    }
    sendSuccess(res, "User updated successfully");
  } catch (err) {
    sendError(res, "Failed to update user", err);
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userModel.deleteUser(id);
    if (result.affectedRows === 0) {
      sendError(res, "User not found");
    }
    sendSuccess(res, "User deleted successfully");
  } catch (err) {
    sendError(res, "Failed to delete user", err);
  }
};
