"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumptiveGoo extends UnimplementedCard {
  constructor(game) {
    super(game, "Consumptive Goo", "Scourge", "SCG");
  }
}

module.exports = ConsumptiveGoo;
