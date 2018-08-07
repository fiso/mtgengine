"use strict";
const Constants = require ("../../../Constants");
const CorpsejackMenaceBase = require("../setCM2/CorpsejackMenace");

class CorpsejackMenace extends CorpsejackMenaceBase {
  constructor (game) {
    super(game, "Corpsejack Menace", "Iconic Masters", "IMA");
  }
}

module.exports = CorpsejackMenace;
