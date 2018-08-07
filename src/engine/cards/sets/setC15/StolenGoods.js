"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StolenGoods extends UnimplementedCard {
  constructor (game) {
    super(game, "Stolen Goods", "Commander 2015", "C15");
  }
}

module.exports = StolenGoods;
