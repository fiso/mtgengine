"use strict";
const Constants = require ("../../../Constants");
const FalseOrdersBase = require("../setCED/FalseOrders");

class FalseOrders extends FalseOrdersBase {
  constructor (game) {
    super(game, "False Orders", "International Collector's Edition", "CEI");
  }
}

module.exports = FalseOrders;
