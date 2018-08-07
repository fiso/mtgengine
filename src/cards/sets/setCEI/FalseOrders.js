"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseOrders extends UnimplementedCard {
  constructor (game) {
    super(game, "False Orders", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = FalseOrders;
