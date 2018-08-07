"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnfulfilledDesires extends UnimplementedCard {
  constructor (game) {
    super(game, "Unfulfilled Desires", "Mirage", "MIR");
  }
}

module.exports = UnfulfilledDesires;
