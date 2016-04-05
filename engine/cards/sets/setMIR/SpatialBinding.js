"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpatialBinding extends UnimplementedCard {
  constructor(game) {
    super(game, "Spatial Binding", "Mirage", "MIR");
  }
}

module.exports = SpatialBinding;
