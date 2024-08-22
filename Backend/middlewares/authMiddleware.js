const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/auth");

const authMiddleware = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token part after 'Bearer '

  if (token) {
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        // Token is invalid or expired
        return res.status(403).json({ error: "Forbidden: Invalid token" });
      }
      // Attach user info to the request object
      req.user = user;
      next();
    });
  } else {
    // Token is missing
    res.status(401).json({ error: "Unauthorized: No token provided" });
  }
};

module.exports = authMiddleware;
