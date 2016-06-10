"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Mantle", "Planeshift", "PLS");
  }
}

module.exports = KeldonMantle;
