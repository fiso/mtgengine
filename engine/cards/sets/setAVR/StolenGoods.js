"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StolenGoods extends UnimplementedCard {
  constructor(game) {
    super(game, "Stolen Goods", "Avacyn Restored", "AVR");
  }
}

module.exports = StolenGoods;
