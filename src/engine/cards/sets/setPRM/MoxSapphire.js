"use strict";
const Constants = require ("../../../Constants");
const MoxSapphireBase = require("../setVMA/MoxSapphire");

class MoxSapphire extends MoxSapphireBase {
  constructor (game) {
    super(game, "Mox Sapphire", "Magic Online Promos", "PRM");
  }
}

module.exports = MoxSapphire;
