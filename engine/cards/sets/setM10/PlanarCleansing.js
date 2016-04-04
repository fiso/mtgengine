"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarCleansing extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Cleansing", "Magic 2010", "M10");
  }
}

module.exports = PlanarCleansing;
