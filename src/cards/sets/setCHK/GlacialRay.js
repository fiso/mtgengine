"use strict";
const Constants = require ("../../../Constants");
const GlacialRayBase = require("../setMMA/GlacialRay");

class GlacialRay extends GlacialRayBase {
  constructor (game) {
    super(game, "Glacial Ray", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GlacialRay;
