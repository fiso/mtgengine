"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setVMA/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor (game) {
    super(game, "Mox Sapphire", "Vintage Championship", "OVNT");
  }
}

module.exports = MoxSapphire;
