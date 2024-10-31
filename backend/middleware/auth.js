const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret_key";

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    res.status(200).json({ message: "Token verified successfully" });
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
