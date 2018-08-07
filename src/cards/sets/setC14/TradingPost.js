"use strict";
const Constants = require ("../../../Constants");
const TradingPostBase = require("../setCM2/TradingPost");

class TradingPost extends TradingPostBase {
  constructor (game) {
    super(game, "Trading Post", "Commander 2014", "C14");
  }
}

module.exports = TradingPost;
