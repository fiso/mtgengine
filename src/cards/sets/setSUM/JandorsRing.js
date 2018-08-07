"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JandorsRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Jandor's Ring", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = JandorsRing;
