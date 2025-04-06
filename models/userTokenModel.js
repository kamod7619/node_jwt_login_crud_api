const db = require('../config/db');

// Create a new user
exports.storeUserToken = (user_id, token) => {
  return db.execute('INSERT INTO user_tokens (user_id, token) VALUES (?, ?)', [user_id, token]);
};

exports.activeToken = async (token) => {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM user_tokens WHERE status = 1 AND token = ?', [token]);
    return rows; 
  } catch (err) {
    console.error("Error querying database:", err);
    throw err;  // Handle the error as needed
  }
};

exports.inactiveUserToken = (status,token) => {
  return db.execute('UPDATE user_tokens SET status = ? WHERE token = ?', [status, token]);
};


