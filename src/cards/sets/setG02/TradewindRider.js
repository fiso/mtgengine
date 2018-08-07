"use strict";
const Constants = require ("../../../Constants");
const TradewindRiderBase = require("../setTPR/TradewindRider");

class TradewindRider extends TradewindRiderBase {
  constructor (game) {
    super(game, "Tradewind Rider", "Judge Gift Cards 2002", "G02");
  }
}

module.exports = TradewindRider;
