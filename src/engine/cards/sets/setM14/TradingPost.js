"use strict";
const Constants = require ("../../../Constants");
const TradingPostBase = require("../setCM2/TradingPost");

class TradingPost extends TradingPostBase {
  constructor (game) {
    super(game, "Trading Post", "Magic 2014", "M14");
  }
}

module.exports = TradingPost;
