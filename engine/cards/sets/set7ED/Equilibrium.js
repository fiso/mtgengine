"use strict";
const Constants = require ("../../../Constants");
const EquilibriumBase = require("../setEXO/Equilibrium");

class Equilibrium extends EquilibriumBase {
  constructor(game) {
    super(game, "Equilibrium", "Seventh Edition", "7ED");
  }
}

module.exports = Equilibrium;
