"use strict";
const Constants = require ("../../../Constants");
const BestialMenaceBase = require("../setCMD/BestialMenace");

class BestialMenace extends BestialMenaceBase {
  constructor(game) {
    super(game, "Bestial Menace", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BestialMenace;
