"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoalitionVictoryBase = require("../setINV/CoalitionVictory.js");

class CoalitionVictory extends CoalitionVictoryBase {
  constructor(game) {
    super(game, "Coalition Victory", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = CoalitionVictory;
