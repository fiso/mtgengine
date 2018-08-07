"use strict";
const Constants = require ("../../../Constants");
const MagmaJetBase = require("../setMM3/MagmaJet");

class MagmaJet extends MagmaJetBase {
  constructor (game) {
    super(game, "Magma Jet", "Friday Night Magic 2009", "F09");
  }
}

module.exports = MagmaJet;
