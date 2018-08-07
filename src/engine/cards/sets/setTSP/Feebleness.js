"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Feebleness extends UnimplementedCard {
  constructor (game) {
    super(game, "Feebleness", "Time Spiral", "TSP");
  }
}

module.exports = Feebleness;
