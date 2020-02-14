const uuid = require("uuid/v4");

exports.up = function (knex) {
    return knex.schema.createTable("waterfalls", tbl => {
        tbl
            .string("id", 255)
            .primary()
            .notNullable()
            .unique();
        tbl
            .string("name", 255)
            .notNullable();
        tbl
            .float("height")
            .notNullable();
        tbl
            .float("width");
        tbl
            .float("flow");
        tbl
            .string("type", 255);



    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("waterfalls");
};
