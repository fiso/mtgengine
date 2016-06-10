"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandEquilibrium extends UnimplementedCard {
  constructor (game) {
    super(game, "Land Equilibrium", "Legends", "LEG");
  }
}

module.exports = LandEquilibrium;
