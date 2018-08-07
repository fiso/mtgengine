"use strict";
const Constants = require ("../../../Constants");
const MagmaJetBase = require("../setMM3/MagmaJet");

class MagmaJet extends MagmaJetBase {
  constructor (game) {
    super(game, "Magma Jet", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = MagmaJet;
