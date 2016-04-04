"use strict";
const Constants = require ("../../../Constants");
const CorpsejackMenaceBase = require("../setpPRE/CorpsejackMenace");

class CorpsejackMenace extends CorpsejackMenaceBase {
  constructor(game) {
    super(game, "Corpsejack Menace", "Return to Ravnica", "RTR");
  }
}

module.exports = CorpsejackMenace;
