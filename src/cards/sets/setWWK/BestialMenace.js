"use strict";
const Constants = require ("../../../Constants");
const BestialMenaceBase = require("../setMM2/BestialMenace");

class BestialMenace extends BestialMenaceBase {
  constructor (game) {
    super(game, "Bestial Menace", "Worldwake", "WWK");
  }
}

module.exports = BestialMenace;
