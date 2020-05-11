function handleError(res, reason, message, code) {
  console.log("ERROR: ", reason, " MESSAGE: ", message, " CODE: ", code);
  //res.status(code || 500).json({ error: message });
}

module.exports = {
  handleError,
};
