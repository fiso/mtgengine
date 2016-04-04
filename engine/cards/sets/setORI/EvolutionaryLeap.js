"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvolutionaryLeap extends Card {
  constructor(game) {
    super(game, "Evolutionary Leap", "Magic Origins", "ORI");
  }
}

module.exports = EvolutionaryLeap;
