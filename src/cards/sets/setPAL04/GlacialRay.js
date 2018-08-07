"use strict";
const Constants = require ("../../../Constants");
const GlacialRayBase = require("../setMMA/GlacialRay");

class GlacialRay extends GlacialRayBase {
  constructor (game) {
    super(game, "Glacial Ray", "Arena League 2004", "PAL04");
  }
}

module.exports = GlacialRay;
