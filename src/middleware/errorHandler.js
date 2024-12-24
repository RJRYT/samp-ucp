// Global Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// Global "Not Found" Route
const notFound = (req, res, next) => {
  res.status(404).json({ error: "Route not found." });
};

module.exports = { errorHandler, notFound };
