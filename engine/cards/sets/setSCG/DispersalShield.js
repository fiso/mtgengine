"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DispersalShield extends Card {
  constructor(game) {
    super(game, "Dispersal Shield", "Scourge", "SCG");
  }
}

module.exports = DispersalShield;
