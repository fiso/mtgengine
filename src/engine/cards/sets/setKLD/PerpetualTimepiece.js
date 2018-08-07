"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerpetualTimepiece extends UnimplementedCard {
  constructor (game) {
    super(game, "Perpetual Timepiece", "Kaladesh", "KLD");
  }
}

module.exports = PerpetualTimepiece;
