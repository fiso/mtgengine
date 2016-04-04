"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TradingPostBase = require("../setC14/TradingPost.js");

class TradingPost extends TradingPostBase {
  constructor(game) {
    super(game, "Trading Post", "Magic 2013", "M13");
  }
}

module.exports = TradingPost;
