"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BookBurning extends UnimplementedCard {
  constructor (game) {
    super(game, "Book Burning", "Judgment", "JUD");
  }
}

module.exports = BookBurning;
