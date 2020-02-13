const db = require("../data/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "email");
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "email") // make sure to return the password
    .where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .select("id", "username", "email")
    .where({ id });
}
