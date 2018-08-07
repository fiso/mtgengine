"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityShaping extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Shaping", "Planechase Anthology", "PCA");
  }
}

module.exports = RealityShaping;
