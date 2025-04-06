const jwt = require("jsonwebtoken");
const { sendError } = require("../helpers/responseHelper");
const { activeToken } = require("../models/userTokenModel");

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    sendError(res, "Access denied. No token provided");
  }

  try {
    let checkToken = await activeToken(token);

    if (checkToken.length === 0) {
      sendError(res, "Invalid or expired token");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    sendError(res, "Invalid or expired token", err);
  }
};

module.exports = verifyToken;
