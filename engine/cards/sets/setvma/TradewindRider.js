"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TradewindRiderBase = require("../setpJGP/TradewindRider.js");

class TradewindRider extends TradewindRiderBase {
  constructor(game) {
    super(game, "Tradewind Rider", "Vintage Masters", "VMA");
  }
}

module.exports = TradewindRider;
