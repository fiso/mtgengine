"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setCED/MoxJet");

class MoxJet extends MoxJetBase {
  constructor(game) {
    super(game, "Mox Jet", "Vintage Masters", "VMA");
  }
}

module.exports = MoxJet;
