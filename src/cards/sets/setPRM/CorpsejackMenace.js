"use strict";
const Constants = require ("../../../Constants");
const CorpsejackMenaceBase = require("../setCM2/CorpsejackMenace");

class CorpsejackMenace extends CorpsejackMenaceBase {
  constructor (game) {
    super(game, "Corpsejack Menace", "Magic Online Promos", "PRM");
  }
}

module.exports = CorpsejackMenace;
