"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setCED/MoxJet");

class MoxJet extends MoxJetBase {
  constructor(game) {
    super(game, "Mox Jet", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MoxJet;
