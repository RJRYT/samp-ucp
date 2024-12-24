const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const { errorHandler, notFound } = require("./src/middleware/errorHandler");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Static files
app.use(express.static(path.join(__dirname, "client/dist")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist", "index.html"));
});

// Global "Not Found" Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
