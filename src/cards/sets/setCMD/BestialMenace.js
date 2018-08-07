"use strict";
const Constants = require ("../../../Constants");
const BestialMenaceBase = require("../setMM2/BestialMenace");

class BestialMenace extends BestialMenaceBase {
  constructor (game) {
    super(game, "Bestial Menace", "Commander 2011", "CMD");
  }
}

module.exports = BestialMenace;
