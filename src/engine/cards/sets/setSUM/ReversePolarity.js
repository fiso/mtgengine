"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReversePolarity extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverse Polarity", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ReversePolarity;
