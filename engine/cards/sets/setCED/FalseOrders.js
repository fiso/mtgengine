"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseOrders extends UnimplementedCard {
  constructor(game) {
    super(game, "False Orders", "Collector's Edition", "CED");
  }
}

module.exports = FalseOrders;
