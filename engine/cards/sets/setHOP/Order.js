"use strict";
const Constants = require ("../../../Constants");
const OrderBase = require("../setAPC/Order");

class Order extends OrderBase {
  constructor(game) {
    super(game, "Order", "Planechase", "HOP");
  }
}

module.exports = Order;
