"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandEquilibrium extends UnimplementedCard {
  constructor (game) {
    super(game, "Land Equilibrium", "Masters Edition III", "ME3");
  }
}

module.exports = LandEquilibrium;
