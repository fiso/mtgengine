"use strict";
const Constants = require ("../../../Constants");
const TradewindRiderBase = require("../setTPR/TradewindRider");

class TradewindRider extends TradewindRiderBase {
  constructor (game) {
    super(game, "Tradewind Rider", "World Championship Decks 1998", "WC98");
  }
}

module.exports = TradewindRider;
