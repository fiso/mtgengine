"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnfulfilledDesires extends Card {
  constructor(game) {
    super(game, "Unfulfilled Desires", "Mirage", "MIR");
  }
}

module.exports = UnfulfilledDesires;
