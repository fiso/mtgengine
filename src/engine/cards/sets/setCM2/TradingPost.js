"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradingPost extends UnimplementedCard {
  constructor (game) {
    super(game, "Trading Post", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = TradingPost;
