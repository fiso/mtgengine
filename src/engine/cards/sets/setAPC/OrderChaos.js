"use strict";
const Constants = require ("../../../Constants");
const OrderChaosBase = require("../setC16/OrderChaos");

class OrderChaos extends OrderChaosBase {
  constructor (game) {
    super(game, "Order // Chaos", "Apocalypse", "APC");
  }
}

module.exports = OrderChaos;
