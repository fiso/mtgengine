"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Order extends Card {
  constructor(game) {
    super(game, "Order", "Apocalypse", "APC");
  }
}

module.exports = Order;
