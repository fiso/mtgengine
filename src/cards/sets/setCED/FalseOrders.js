"use strict";
const Constants = require ("../../../Constants");
const FalseOrdersBase = require("../setCEI/FalseOrders");

class FalseOrders extends FalseOrdersBase {
  constructor (game) {
    super(game, "False Orders", "Collectors’ Edition", "CED");
  }
}

module.exports = FalseOrders;
