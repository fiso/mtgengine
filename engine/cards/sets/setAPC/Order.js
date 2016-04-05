"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Order extends UnimplementedCard {
  constructor(game) {
    super(game, "Order", "Apocalypse", "APC");
  }
}

module.exports = Order;
