/**
 * Helper function to send a common response structure
 * @param {object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {boolean} success - Whether the request was successful
 * @param {string} message - Message to send in response
 * @param {object} data - Data to send with response (optional)
 */
const sendResponse = (res, statusCode, success, message, data = null) => {
    res.status(statusCode).json({
      success,
      message,
      data,
    });
  };
  
  /**
   * Helper function for sending a success response
   * @param {object} res - Express response object
   * @param {string} message - Success message
   * @param {object} data - Data to send (optional)
   */
  const sendSuccess = (res, message, data = null) => {
    sendResponse(res, 200, true, message, data);
  };
  
  /**
   * Helper function for sending an error response
   * @param {object} res - Express response object
   * @param {string} message - Error message
   * @param {object} error - Error details (optional)
   */
  const sendError = (res, message, error = null) => {
    sendResponse(res, 400, false, message, error);
  };
  
  module.exports = { sendSuccess, sendError };
  