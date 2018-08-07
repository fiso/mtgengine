"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubtleStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Subtle Strike", "Kaladesh", "KLD");
  }
}

module.exports = SubtleStrike;
