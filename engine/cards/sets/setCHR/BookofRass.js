"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BookofRass extends Card {
  constructor(game) {
    super(game, "Book of Rass", "Chronicles", "CHR");
  }
}

module.exports = BookofRass;
