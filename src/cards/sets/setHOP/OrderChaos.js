"use strict";
const Constants = require ("../../../Constants");
const OrderChaosBase = require("../setC16/OrderChaos");

class OrderChaos extends OrderChaosBase {
  constructor (game) {
    super(game, "Order // Chaos", "Planechase", "HOP");
  }
}

module.exports = OrderChaos;
