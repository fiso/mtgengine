"use strict";
const Constants = require ("../../../Constants");
const EvolutionaryLeapBase = require("../setPORI/EvolutionaryLeap");

class EvolutionaryLeap extends EvolutionaryLeapBase {
  constructor (game) {
    super(game, "Evolutionary Leap", "Magic Origins", "ORI");
  }
}

module.exports = EvolutionaryLeap;
