const handleError = (err) => {
  if (err.name === "ValidationError") {
    return "Validation Error: " + err.message;
  }
  return "Server Error: " + err.message;
};

module.exports = { handleError };
