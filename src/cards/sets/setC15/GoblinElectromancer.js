"use strict";
const Constants = require ("../../../Constants");
const GoblinElectromancerBase = require("../setDDS/GoblinElectromancer");

class GoblinElectromancer extends GoblinElectromancerBase {
  constructor (game) {
    super(game, "Goblin Electromancer", "Commander 2015", "C15");
  }
}

module.exports = GoblinElectromancer;
