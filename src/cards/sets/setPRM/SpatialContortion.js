"use strict";
const Constants = require ("../../../Constants");
const SpatialContortionBase = require("../setOGW/SpatialContortion");

class SpatialContortion extends SpatialContortionBase {
  constructor (game) {
    super(game, "Spatial Contortion", "Magic Online Promos", "PRM");
  }
}

module.exports = SpatialContortion;
