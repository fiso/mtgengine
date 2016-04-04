"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanctifiedCharge extends Card {
  constructor(game) {
    super(game, "Sanctified Charge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SanctifiedCharge;
