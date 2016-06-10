"use strict";
const Constants = require ("../../../Constants");
const OrderofLeitburBase = require("../setFEM/OrderofLeitbur");

class OrderofLeitbur extends OrderofLeitburBase {
  constructor (game) {
    super(game, "Order of Leitbur", "Masters Edition", "MED");
  }
}

module.exports = OrderofLeitbur;
