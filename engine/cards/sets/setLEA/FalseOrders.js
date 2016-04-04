"use strict";
const Constants = require ("../../../Constants");
const FalseOrdersBase = require("../setCED/FalseOrders");

class FalseOrders extends FalseOrdersBase {
  constructor(game) {
    super(game, "False Orders", "Limited Edition Alpha", "LEA");
  }
}

module.exports = FalseOrders;
