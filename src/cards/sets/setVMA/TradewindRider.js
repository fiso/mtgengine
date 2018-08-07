"use strict";
const Constants = require ("../../../Constants");
const TradewindRiderBase = require("../setTPR/TradewindRider");

class TradewindRider extends TradewindRiderBase {
  constructor (game) {
    super(game, "Tradewind Rider", "Vintage Masters", "VMA");
  }
}

module.exports = TradewindRider;
