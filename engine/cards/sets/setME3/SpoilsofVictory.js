"use strict";
const Constants = require ("../../../Constants");
const SpoilsofVictoryBase = require("../setC13/SpoilsofVictory");

class SpoilsofVictory extends SpoilsofVictoryBase {
  constructor(game) {
    super(game, "Spoils of Victory", "Masters Edition III", "ME3");
  }
}

module.exports = SpoilsofVictory;
