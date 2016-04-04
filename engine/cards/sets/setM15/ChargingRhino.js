"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChargingRhino extends Card {
  constructor(game) {
    super(game, "Charging Rhino", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChargingRhino;
