"use strict";
const Constants = require ("../../../Constants");
const LandEquilibriumBase = require("../setME3/LandEquilibrium");

class LandEquilibrium extends LandEquilibriumBase {
  constructor (game) {
    super(game, "Land Equilibrium", "Legends", "LEG");
  }
}

module.exports = LandEquilibrium;
