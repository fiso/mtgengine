"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setVMA/MoxJet");

class MoxJet extends MoxJetBase {
  constructor (game) {
    super(game, "Mox Jet", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = MoxJet;
