"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setVMA/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor (game) {
    super(game, "Mox Sapphire", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = MoxSapphire;
