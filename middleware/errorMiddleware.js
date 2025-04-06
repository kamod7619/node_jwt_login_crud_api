// Global error handler middleware
const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong!',err:err });
  };
  
  module.exports = errorMiddleware;
  