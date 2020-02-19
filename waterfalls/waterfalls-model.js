const db = require("../data/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("waterfalls").select(
    "id",
    "name",
    "height",
    "width",
    "flow",
    "type",
    "coordinates",
    "country",
    "region"
  );
}

function findBy(filter) {
  return db("waterfalls")
    .select(
      "id",
      "name",
      "height",
      "width",
      "flow",
      "type",
      "coordinates",
      "country",
      "region"
    )
    .where(filter);
}

function add(waterfall) {
  return db("waterfalls")
    .insert(waterfall, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("waterfalls")
    .select("id", "username", "email")
    .where({ id });
}
