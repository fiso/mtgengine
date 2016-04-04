"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumptiveGoo extends Card {
  constructor(game) {
    super(game, "Consumptive Goo", "Scourge", "SCG");
  }
}

module.exports = ConsumptiveGoo;
