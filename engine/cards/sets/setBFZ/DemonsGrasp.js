"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonsGrasp extends Card {
  constructor(game) {
    super(game, "Demon's Grasp", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DemonsGrasp;
