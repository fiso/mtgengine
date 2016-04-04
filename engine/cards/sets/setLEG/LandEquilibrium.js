"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandEquilibrium extends Card {
  constructor(game) {
    super(game, "Land Equilibrium", "Legends", "LEG");
  }
}

module.exports = LandEquilibrium;
