"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistortionStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Distortion Strike", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DistortionStrike;
