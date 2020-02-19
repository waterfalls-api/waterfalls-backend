const uuid = require("uuid/v4");

exports.seed = function(knex) {
  return knex("waterfalls").insert([
    {
      id: uuid(),
      name: "Hemmed In Hollow Falls",
      height: 64,
      // width: '',
      // flow: '',
      type: "Plunge",
      coordinates: "36.0721, -93.3075",
      country: "United States",
      region: "Arkansas"
    },
    {
      id: uuid(),
      name: "Splash Town",
      height: 64,
      // width: '',
      flow: "pee",
      type: "little kids",
      coordinates: "google",
      country: "Your Country",
      region: "MERICA"
    }
  ]);
};
