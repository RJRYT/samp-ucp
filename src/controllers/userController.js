const pool = require("../config/db");

// Fetch User Profile
const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(req.user);

    const [rows] = await pool.execute(
      "SELECT uid, username FROM users WHERE uid = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json({ user: rows[0] });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserProfile };
