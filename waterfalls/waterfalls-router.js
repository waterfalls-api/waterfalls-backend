const router = require("express").Router();

const config = require("../auth/config");

const Falls = require("./waterfalls-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", (req, res) => {
  console.log("Getting waterfalls");

  Falls.find()
    .then(waterfalls => {
      res.json(waterfalls);
    })
    .catch(error => {
      console.log("----->", error);
      res.send(error);
    });
});

// router.post("/", (req, res) => {
//   console.log("Posting w");

//   const user = req.body;

//   Users.add(user)
//     .then(user => {
//       res.json(user);
//     })
//     .catch(error => {
//       console.log("----->", error);
//       res.send(error);
//     });
// });

// router.post("/verify", (req, res) => {
//   console.log("Verifying user");
//   console.log("BODY IS: ", req.body);
//   const user = req.body;

//   Users.findById(user.id)
//     .then(user => {
//       if (user.length > 0) {
//         console.log("Found existing user", user);
//       } else {
//         console.log("User not found! Creating user");
//         Users.add(req.body)
//           .then(user => {
//             res.json(user);
//           })
//           .catch(error => {
//             console.log("----->", error);
//             res.send(error);
//           });
//       }
//     })
//     .error(err => {
//       console.log(err);
//     });
// });

module.exports = router;
