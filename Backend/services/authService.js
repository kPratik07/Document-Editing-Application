const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtConfig = require("../config/jwt");

exports.register = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials.");
  }
  return jwt.sign({ id: user._id }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });
};
