"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setVMA/MoxJet");

class MoxJet extends MoxJetBase {
  constructor (game) {
    super(game, "Mox Jet", "Limited Edition Beta", "LEB");
  }
}

module.exports = MoxJet;
