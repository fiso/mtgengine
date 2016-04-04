"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurstofEnergy extends Card {
  constructor(game) {
    super(game, "Burst of Energy", "Urza's Legacy", "ULG");
  }
}

module.exports = BurstofEnergy;
