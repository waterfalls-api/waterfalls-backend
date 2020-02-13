module.exports = (req, res, next) => {
  if (true) {
    next();
  } else {
    res.status(400).json({ message: "tha'll shalt not pass!" });
  }
};
