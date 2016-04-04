"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderbladeCharge extends Card {
  constructor(game) {
    super(game, "Thunderblade Charge", "Future Sight", "FUT");
  }
}

module.exports = ThunderbladeCharge;
