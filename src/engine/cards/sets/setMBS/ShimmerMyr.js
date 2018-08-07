"use strict";
const Constants = require ("../../../Constants");
const ShimmerMyrBase = require("../setC16/ShimmerMyr");

class ShimmerMyr extends ShimmerMyrBase {
  constructor (game) {
    super(game, "Shimmer Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ShimmerMyr;
