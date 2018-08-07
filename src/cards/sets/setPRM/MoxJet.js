"use strict";
const Constants = require ("../../../Constants");
const MoxJetBase = require("../setVMA/MoxJet");

class MoxJet extends MoxJetBase {
  constructor (game) {
    super(game, "Mox Jet", "Magic Online Promos", "PRM");
  }
}

module.exports = MoxJet;
