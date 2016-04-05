"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScatteringStroke extends UnimplementedCard {
  constructor(game) {
    super(game, "Scattering Stroke", "Lorwyn", "LRW");
  }
}

module.exports = ScatteringStroke;
