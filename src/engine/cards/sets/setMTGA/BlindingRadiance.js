"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingRadiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Radiance", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = BlindingRadiance;
