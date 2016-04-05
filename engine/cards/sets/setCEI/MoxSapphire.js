"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setCED/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor(game) {
    super(game, "Mox Sapphire", "International Collector's Edition", "CEI");
  }
}

module.exports = MoxSapphire;
