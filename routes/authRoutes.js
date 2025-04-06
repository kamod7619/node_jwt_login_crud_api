const express = require('express');
const rateLimit = require('express-rate-limit');
const verifyToken = require('../middleware/authMiddleware'); 
const authController = require('../controllers/authController');

const router = express.Router();

// Create a rate limiter
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `windowMs` (15 minutes)
    message: (req, res) => {
        const remainingTime = Math.ceil((req.rateLimit.resetTime - Date.now()) / 1000); // Get remaining time for reset in seconds
        return res.status(429).json({
          error: true,
          message: `Too many requests from this IP, please try again after ${remainingTime} seconds.`,
        });
      },
    headers: true,
});
  
  // Apply the rate limiter to all routes
router.use(apiLimiter);

// Login route
router.post('/login', authController.loginuser);

router.post('/logout', verifyToken,authController.logoutUser);

module.exports = router;
