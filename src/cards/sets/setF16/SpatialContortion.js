"use strict";
const Constants = require ("../../../Constants");
const SpatialContortionBase = require("../setOGW/SpatialContortion");

class SpatialContortion extends SpatialContortionBase {
  constructor (game) {
    super(game, "Spatial Contortion", "Friday Night Magic 2016", "F16");
  }
}

module.exports = SpatialContortion;
