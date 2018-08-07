"use strict";
const Constants = require ("../../../Constants");
const CoalitionVictoryBase = require("../setTSB/CoalitionVictory");

class CoalitionVictory extends CoalitionVictoryBase {
  constructor (game) {
    super(game, "Coalition Victory", "Invasion", "INV");
  }
}

module.exports = CoalitionVictory;
