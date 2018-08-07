"use strict";
const Constants = require ("../../../Constants");
const EquilibriumBase = require("../set7ED/Equilibrium");

class Equilibrium extends EquilibriumBase {
  constructor (game) {
    super(game, "Equilibrium", "Exodus", "EXO");
  }
}

module.exports = Equilibrium;
