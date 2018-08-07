"use strict";
const Constants = require ("../../../Constants");
const AethergeodeMinerBase = require("../setAER/AethergeodeMiner");

class AethergeodeMiner extends AethergeodeMinerBase {
  constructor (game) {
    super(game, "Aethergeode Miner", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AethergeodeMiner;
