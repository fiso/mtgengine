"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Edict", "Masters 25", "A25");
  }
}

module.exports = DiabolicEdict;
