"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LatullasOrders extends Card {
  constructor(game) {
    super(game, "Latulla's Orders", "Prophecy", "PCY");
  }
}

module.exports = LatullasOrders;
