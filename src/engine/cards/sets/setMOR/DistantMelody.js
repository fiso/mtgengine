"use strict";
const Constants = require ("../../../Constants");
const DistantMelodyBase = require("../setH09/DistantMelody");

class DistantMelody extends DistantMelodyBase {
  constructor (game) {
    super(game, "Distant Melody", "Morningtide", "MOR");
  }
}

module.exports = DistantMelody;
