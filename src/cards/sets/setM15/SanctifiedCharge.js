"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctifiedCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctified Charge", "Magic 2015", "M15");
  }
}

module.exports = SanctifiedCharge;
