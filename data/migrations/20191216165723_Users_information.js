exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users
      .string("id", 255)
      .notNullable()
      .unique();
    users
      .string("username", 100)
      .notNullable()
      .unique();
    users
      .string("email", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
