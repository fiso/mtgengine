"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradingPost extends UnimplementedCard {
  constructor(game) {
    super(game, "Trading Post", "Commander 2014", "C14");
  }
}

module.exports = TradingPost;
