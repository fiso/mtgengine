"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherTradewindsBase = require("../setCNS/ÆtherTradewinds.js");

class ÆtherTradewinds extends ÆtherTradewindsBase {
  constructor(game) {
    super(game, "Æther Tradewinds", "Worldwake", "WWK");
  }
}

module.exports = ÆtherTradewinds;
