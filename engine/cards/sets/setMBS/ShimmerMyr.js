"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShimmerMyr extends Card {
  constructor(game) {
    super(game, "Shimmer Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ShimmerMyr;
