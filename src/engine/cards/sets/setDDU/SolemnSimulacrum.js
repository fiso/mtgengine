"use strict";
const Constants = require ("../../../Constants");
const SolemnSimulacrumBase = require("../setCM2/SolemnSimulacrum");

class SolemnSimulacrum extends SolemnSimulacrumBase {
  constructor (game) {
    super(game, "Solemn Simulacrum", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = SolemnSimulacrum;
