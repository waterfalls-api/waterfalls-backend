const router = require("express").Router();

const config = require("../auth/config");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  console.log("Getting users");

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log("----->", error);
      res.send(error);
    });
});

router.post("/", (req, res) => {
  console.log("Posting user");

  const user = req.body;

  Users.add(user)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log("----->", error);
      res.send(error);
    });
});

router.post("/verify", (req, res) => {
  console.log("Verifying user");
  console.log("BODY IS: ", req.body);
  const user = req.body;

  Users.findById(user.id)
    .then(user => {
      if (user.length > 0) {
        console.log("Found existing user", user);
      } else {
        console.log("User not found! Creating user");
        Users.add(req.body)
          .then(user => {
            res.json(user);
          })
          .catch(error => {
            console.log("----->", error);
            res.send(error);
          });
      }
    })
    .error(err => {
      console.log(err);
    });
});

module.exports = router;
