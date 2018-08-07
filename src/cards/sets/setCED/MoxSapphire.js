"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setVMA/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor (game) {
    super(game, "Mox Sapphire", "Collectors’ Edition", "CED");
  }
}

module.exports = MoxSapphire;
