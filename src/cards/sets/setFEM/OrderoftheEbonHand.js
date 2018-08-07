"use strict";
const Constants = require ("../../../Constants");
const OrderoftheEbonHandBase = require("../setMED/OrderoftheEbonHand");

class OrderoftheEbonHand extends OrderoftheEbonHandBase {
  constructor (game) {
    super(game, "Order of the Ebon Hand", "Fallen Empires", "FEM");
  }
}

module.exports = OrderoftheEbonHand;
