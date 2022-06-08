"use strict";

var chatOP = {
  client: 'sqlite3',
  connection: {
    filename: './database/ecommerce.sqlite'
  },
  useNullAsDefault: true
};
module.exports = {
  chatOP: chatOP
};
