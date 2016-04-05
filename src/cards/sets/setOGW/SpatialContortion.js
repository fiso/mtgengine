"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpatialContortion extends UnimplementedCard {
  constructor(game) {
    super(game, "Spatial Contortion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SpatialContortion;
