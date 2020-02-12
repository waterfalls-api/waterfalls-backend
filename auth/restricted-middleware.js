
module.exports = (req, res, next) => {

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(400).json({ message: "tha'll shalt not pass!" });
    }
};
