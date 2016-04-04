"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JaradsOrders extends Card {
  constructor(game) {
    super(game, "Jarad's Orders", "Return to Ravnica", "RTR");
  }
}

module.exports = JaradsOrders;
