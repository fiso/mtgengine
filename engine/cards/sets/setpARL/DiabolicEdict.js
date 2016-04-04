"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiabolicEdict extends Card {
  constructor(game) {
    super(game, "Diabolic Edict", "Arena League", "pARL");
  }
}

module.exports = DiabolicEdict;
