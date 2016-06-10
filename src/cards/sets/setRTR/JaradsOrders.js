"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaradsOrders extends UnimplementedCard {
  constructor (game) {
    super(game, "Jarad's Orders", "Return to Ravnica", "RTR");
  }
}

module.exports = JaradsOrders;
