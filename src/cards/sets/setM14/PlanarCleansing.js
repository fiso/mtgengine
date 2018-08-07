"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarCleansing extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Cleansing", "Magic 2014", "M14");
  }
}

module.exports = PlanarCleansing;
