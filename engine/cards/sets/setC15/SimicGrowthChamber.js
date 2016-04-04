"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicGrowthChamber extends Card {
  constructor(game) {
    super(game, "Simic Growth Chamber", "Commander 2015", "C15");
  }
}

module.exports = SimicGrowthChamber;
