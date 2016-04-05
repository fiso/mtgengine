"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JandorsRing extends UnimplementedCard {
  constructor(game) {
    super(game, "Jandor's Ring", "Arabian Nights", "ARN");
  }
}

module.exports = JandorsRing;
