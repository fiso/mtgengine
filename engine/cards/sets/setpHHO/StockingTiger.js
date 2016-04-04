"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StockingTiger extends Card {
  constructor(game) {
    super(game, "Stocking Tiger", "Happy Holidays", "pHHO");
  }
}

module.exports = StockingTiger;
