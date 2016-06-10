"use strict";
const Constants = require ("../../../Constants");
const MagmaJetBase = require("../setDD3_JVC/MagmaJet");

class MagmaJet extends MagmaJetBase {
  constructor (game) {
    super(game, "Magma Jet", "Fifth Dawn", "5DN");
  }
}

module.exports = MagmaJet;
