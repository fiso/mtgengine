"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseOrders extends Card {
  constructor(game) {
    super(game, "False Orders", "Collector's Edition", "CED");
  }
}

module.exports = FalseOrders;
