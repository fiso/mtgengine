"use strict";
const Constants = require ("../../../Constants");
const BlindingBeamBase = require("../setMMA/BlindingBeam");

class BlindingBeam extends BlindingBeamBase {
  constructor (game) {
    super(game, "Blinding Beam", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = BlindingBeam;
