"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonShadow extends Card {
  constructor(game) {
    super(game, "Dragon Shadow", "Scourge", "SCG");
  }
}

module.exports = DragonShadow;
