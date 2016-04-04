"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinElectromancerBase = require("../setC15/GoblinElectromancer.js");

class GoblinElectromancer extends GoblinElectromancerBase {
  constructor(game) {
    super(game, "Goblin Electromancer", "Return to Ravnica", "RTR");
  }
}

module.exports = GoblinElectromancer;
