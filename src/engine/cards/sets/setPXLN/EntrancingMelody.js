"use strict";
const Constants = require ("../../../Constants");
const EntrancingMelodyBase = require("../setXLN/EntrancingMelody");

class EntrancingMelody extends EntrancingMelodyBase {
  constructor (game) {
    super(game, "Entrancing Melody", "Ixalan Promos", "PXLN");
  }
}

module.exports = EntrancingMelody;
