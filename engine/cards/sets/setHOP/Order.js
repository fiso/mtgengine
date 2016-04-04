"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrderBase = require("../setAPC/Order.js");

class Order extends OrderBase {
  constructor(game) {
    super(game, "Order", "Planechase", "HOP");
  }
}

module.exports = Order;
