"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmerMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Shimmer Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ShimmerMyr;
