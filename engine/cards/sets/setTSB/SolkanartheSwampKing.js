"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SolkanartheSwampKingBase = require("../setCHR/SolkanartheSwampKing.js");

class SolkanartheSwampKing extends SolkanartheSwampKingBase {
  constructor(game) {
    super(game, "Sol'kanar the Swamp King", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SolkanartheSwampKing;
