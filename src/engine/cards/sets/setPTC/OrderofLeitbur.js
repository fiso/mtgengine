"use strict";
const Constants = require ("../../../Constants");
const OrderofLeitburBase = require("../setMED/OrderofLeitbur");

class OrderofLeitbur extends OrderofLeitburBase {
  constructor (game) {
    super(game, "Order of Leitbur", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = OrderofLeitbur;
