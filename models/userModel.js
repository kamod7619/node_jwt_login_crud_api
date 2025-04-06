const db = require('../config/db');

// Create a new user
exports.createUser = (name, email,password, age) => {
  return db.execute('INSERT INTO users (name, email,password, age) VALUES (?, ?, ?,?)', [name, email,password, age]);
};

// Get all users
exports.getUsers = () => {
  return db.execute('SELECT * FROM users ORDER BY id DESC');
};
// Get single user by id
exports.getSingleUser = (id) => {
    return db.execute('SELECT * FROM users WHERE id = ?', [id]);
};

// Get single user by email
exports.getUserByEmail = (email) => {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
};

// Update a user
exports.updateUser = (id, name, email, age) => {
  return db.execute('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id]);
};

// Delete a user
exports.deleteUser = (id) => {
  return db.execute('DELETE FROM users WHERE id = ?', [id]);
};
