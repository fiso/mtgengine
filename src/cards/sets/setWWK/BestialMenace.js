"use strict";
const Constants = require ("../../../Constants");
const BestialMenaceBase = require("../setCMD/BestialMenace");

class BestialMenace extends BestialMenaceBase {
  constructor(game) {
    super(game, "Bestial Menace", "Worldwake", "WWK");
  }
}

module.exports = BestialMenace;
