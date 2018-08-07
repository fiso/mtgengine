"use strict";
const Constants = require ("../../../Constants");
const GoblinElectromancerBase = require("../setDDS/GoblinElectromancer");

class GoblinElectromancer extends GoblinElectromancerBase {
  constructor (game) {
    super(game, "Goblin Electromancer", "Modern Masters 2017", "MM3");
  }
}

module.exports = GoblinElectromancer;
