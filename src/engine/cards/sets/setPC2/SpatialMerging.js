"use strict";
const Constants = require ("../../../Constants");
const SpatialMergingBase = require("../setPCA/SpatialMerging");

class SpatialMerging extends SpatialMergingBase {
  constructor (game) {
    super(game, "Spatial Merging", "Planechase 2012", "PC2");
  }
}

module.exports = SpatialMerging;
