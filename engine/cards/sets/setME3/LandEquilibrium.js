"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LandEquilibriumBase = require("../setLEG/LandEquilibrium.js");

class LandEquilibrium extends LandEquilibriumBase {
  constructor(game) {
    super(game, "Land Equilibrium", "Masters Edition III", "ME3");
  }
}

module.exports = LandEquilibrium;
