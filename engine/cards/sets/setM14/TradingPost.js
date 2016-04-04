"use strict";
const Constants = require ("../../../Constants");
const TradingPostBase = require("../setC14/TradingPost");

class TradingPost extends TradingPostBase {
  constructor(game) {
    super(game, "Trading Post", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TradingPost;
