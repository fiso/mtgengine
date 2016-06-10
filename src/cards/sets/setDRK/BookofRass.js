"use strict";
const Constants = require ("../../../Constants");
const BookofRassBase = require("../setCHR/BookofRass");

class BookofRass extends BookofRassBase {
  constructor (game) {
    super(game, "Book of Rass", "The Dark", "DRK");
  }
}

module.exports = BookofRass;
