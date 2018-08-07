"use strict";
const Constants = require ("../../../Constants");
const GoblinElectromancerBase = require("../setDDS/GoblinElectromancer");

class GoblinElectromancer extends GoblinElectromancerBase {
  constructor (game) {
    super(game, "Goblin Electromancer", "Return to Ravnica", "RTR");
  }
}

module.exports = GoblinElectromancer;
