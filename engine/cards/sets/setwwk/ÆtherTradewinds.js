"use strict";
const Constants = require ("../../../Constants");
const ÆtherTradewindsBase = require("../setCNS/ÆtherTradewinds");

class ÆtherTradewinds extends ÆtherTradewindsBase {
  constructor(game) {
    super(game, "Æther Tradewinds", "Worldwake", "WWK");
  }
}

module.exports = ÆtherTradewinds;
