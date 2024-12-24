const pool = require("../config/db");
const { hashPassword } = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

// Login User
const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  try {
    const hashedPassword = await hashPassword(password);

    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, hashedPassword]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = generateToken(rows[0].uid);
    res.json({
      message: "Login successful.",
      token,
      user: { id: rows[0].uid, username: rows[0].username },
    });
  } catch (error) {
    next(error);
  }
};

// Register User
const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  try {
    const hashedPassword = await hashPassword(password);

    const [existingUser] = await pool.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ error: "Username already exists." });
    }

    await pool.execute("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);

    res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginUser, registerUser };
