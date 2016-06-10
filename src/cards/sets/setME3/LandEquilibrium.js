"use strict";
const Constants = require ("../../../Constants");
const LandEquilibriumBase = require("../setLEG/LandEquilibrium");

class LandEquilibrium extends LandEquilibriumBase {
  constructor (game) {
    super(game, "Land Equilibrium", "Masters Edition III", "ME3");
  }
}

module.exports = LandEquilibrium;
