"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fish extends UnimplementedCard {
  constructor (game) {
    super(game, "Fish", "Masters 25 Tokens", "TA25");
  }
}

module.exports = Fish;
