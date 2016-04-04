"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParalyzingGrasp extends Card {
  constructor(game) {
    super(game, "Paralyzing Grasp", "Return to Ravnica", "RTR");
  }
}

module.exports = ParalyzingGrasp;
