"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctifiedCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanctified Charge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SanctifiedCharge;
