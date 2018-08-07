"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setVMA/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor (game) {
    super(game, "Mox Sapphire", "Limited Edition Beta", "LEB");
  }
}

module.exports = MoxSapphire;
