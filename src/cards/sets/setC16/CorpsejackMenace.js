"use strict";
const Constants = require ("../../../Constants");
const CorpsejackMenaceBase = require("../setCM2/CorpsejackMenace");

class CorpsejackMenace extends CorpsejackMenaceBase {
  constructor (game) {
    super(game, "Corpsejack Menace", "Commander 2016", "C16");
  }
}

module.exports = CorpsejackMenace;
