"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalForcemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Forcemage", "Time Spiral", "TSP");
  }
}

module.exports = PrimalForcemage;
