"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setCED/MoxJet");

class MoxJet extends MoxJetBase {
  constructor (game) {
    super(game, "Mox Jet", "International Collector's Edition", "CEI");
  }
}

module.exports = MoxJet;
