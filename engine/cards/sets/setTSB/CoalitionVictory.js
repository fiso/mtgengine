"use strict";
const Constants = require ("../../../Constants");
const CoalitionVictoryBase = require("../setINV/CoalitionVictory");

class CoalitionVictory extends CoalitionVictoryBase {
  constructor(game) {
    super(game, "Coalition Victory", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = CoalitionVictory;
