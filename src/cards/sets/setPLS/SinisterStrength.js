"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinisterStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinister Strength", "Planeshift", "PLS");
  }
}

module.exports = SinisterStrength;
