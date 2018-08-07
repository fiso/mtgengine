"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScatteringStroke extends UnimplementedCard {
  constructor (game) {
    super(game, "Scattering Stroke", "Commander 2011", "CMD");
  }
}

module.exports = ScatteringStroke;
