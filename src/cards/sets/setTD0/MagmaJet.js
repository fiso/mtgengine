"use strict";
const Constants = require ("../../../Constants");
const MagmaJetBase = require("../setMM3/MagmaJet");

class MagmaJet extends MagmaJetBase {
  constructor (game) {
    super(game, "Magma Jet", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = MagmaJet;
