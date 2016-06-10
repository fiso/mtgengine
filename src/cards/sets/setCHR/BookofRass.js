"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BookofRass extends UnimplementedCard {
  constructor (game) {
    super(game, "Book of Rass", "Chronicles", "CHR");
  }
}

module.exports = BookofRass;
