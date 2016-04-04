"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StockingTiger extends UnimplementedCard {
  constructor(game) {
    super(game, "Stocking Tiger", "Happy Holidays", "pHHO");
  }
}

module.exports = StockingTiger;
