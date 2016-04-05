"use strict";
const Constants = require ("../../../Constants");
const DistantMelodyBase = require("../setMOR/DistantMelody");

class DistantMelody extends DistantMelodyBase {
  constructor(game) {
    super(game, "Distant Melody", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = DistantMelody;
