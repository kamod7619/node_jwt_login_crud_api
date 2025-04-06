const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');


// Initialize Express app
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

// Error handling middleware (should be at the end)
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
