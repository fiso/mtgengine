"use strict";
const Constants = require ("../../../Constants");
const BookofRassBase = require("../setME4/BookofRass");

class BookofRass extends BookofRassBase {
  constructor (game) {
    super(game, "Book of Rass", "The Dark", "DRK");
  }
}

module.exports = BookofRass;
