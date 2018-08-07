"use strict";
const Constants = require ("../../../Constants");
const AetherTradewindsBase = require("../setKLD/AetherTradewinds");

class AetherTradewinds extends AetherTradewindsBase {
  constructor (game) {
    super(game, "Aether Tradewinds", "Worldwake", "WWK");
  }
}

module.exports = AetherTradewinds;
