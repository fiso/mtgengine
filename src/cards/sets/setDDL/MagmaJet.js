"use strict";
const Constants = require ("../../../Constants");
const MagmaJetBase = require("../setMM3/MagmaJet");

class MagmaJet extends MagmaJetBase {
  constructor (game) {
    super(game, "Magma Jet", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MagmaJet;
