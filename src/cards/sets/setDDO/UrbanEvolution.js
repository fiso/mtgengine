"use strict";
const Constants = require ("../../../Constants");
const UrbanEvolutionBase = require("../setMM3/UrbanEvolution");

class UrbanEvolution extends UrbanEvolutionBase {
  constructor (game) {
    super(game, "Urban Evolution", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = UrbanEvolution;
