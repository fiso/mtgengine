"use strict";
const Constants = require ("../../../Constants");
const BreakingEnteringBase = require("../setDGM/BreakingEntering");

class BreakingEntering extends BreakingEnteringBase {
  constructor (game) {
    super(game, "Breaking // Entering", "Dragon's Maze Promos", "PDGM");
  }
}

module.exports = BreakingEntering;
