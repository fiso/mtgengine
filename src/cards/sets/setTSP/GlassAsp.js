"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlassAsp extends UnimplementedCard {
  constructor (game) {
    super(game, "Glass Asp", "Time Spiral", "TSP");
  }
}

module.exports = GlassAsp;
