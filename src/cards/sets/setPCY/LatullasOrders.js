"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LatullasOrders extends UnimplementedCard {
  constructor(game) {
    super(game, "Latulla's Orders", "Prophecy", "PCY");
  }
}

module.exports = LatullasOrders;
