"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalBoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Boost", "Onslaught", "ONS");
  }
}

module.exports = PrimalBoost;
