"use strict";
const Constants = require ("../../../Constants");
const AetherTradewindsBase = require("../setCNS/AetherTradewinds");

class AetherTradewinds extends AetherTradewindsBase {
  constructor(game) {
    super(game, "Æther Tradewinds", "Worldwake", "WWK");
  }
}

module.exports = AetherTradewinds;
