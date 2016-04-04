"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TradingPost extends Card {
  constructor(game) {
    super(game, "Trading Post", "Commander 2014", "C14");
  }
}

module.exports = TradingPost;
