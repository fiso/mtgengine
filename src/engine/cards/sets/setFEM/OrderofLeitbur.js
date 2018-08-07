"use strict";
const Constants = require ("../../../Constants");
const OrderofLeitburBase = require("../setMED/OrderofLeitbur");

class OrderofLeitbur extends OrderofLeitburBase {
  constructor (game) {
    super(game, "Order of Leitbur", "Fallen Empires", "FEM");
  }
}

module.exports = OrderofLeitbur;
