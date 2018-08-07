"use strict";
const Constants = require ("../../../Constants");
const TradingPostBase = require("../setCM2/TradingPost");

class TradingPost extends TradingPostBase {
  constructor (game) {
    super(game, "Trading Post", "Commander 2016", "C16");
  }
}

module.exports = TradingPost;
