"use strict";
const Constants = require ("../../../Constants");
const FalseOrdersBase = require("../setCED/FalseOrders");

class FalseOrders extends FalseOrdersBase {
  constructor(game) {
    super(game, "False Orders", "Limited Edition Beta", "LEB");
  }
}

module.exports = FalseOrders;
