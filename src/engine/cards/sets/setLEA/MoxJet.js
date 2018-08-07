"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setVMA/MoxJet");

class MoxJet extends MoxJetBase {
  constructor (game) {
    super(game, "Mox Jet", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MoxJet;
