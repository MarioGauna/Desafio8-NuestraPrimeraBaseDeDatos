"use strict";

var prodOP = {
  client: 'mysql',
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "warehouse"
  },
  pool: {
    min: 0,
    max: 10
  }
};
module.exports = {
  prodOP: prodOP
};
