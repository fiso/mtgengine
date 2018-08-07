"use strict";
const Constants = require ("../../../Constants");
const GlacialRayBase = require("../setMMA/GlacialRay");

class GlacialRay extends GlacialRayBase {
  constructor (game) {
    super(game, "Glacial Ray", "Magic Online Promos", "PRM");
  }
}

module.exports = GlacialRay;
