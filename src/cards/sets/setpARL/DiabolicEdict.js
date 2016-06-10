"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Edict", "Arena League", "pARL");
  }
}

module.exports = DiabolicEdict;
