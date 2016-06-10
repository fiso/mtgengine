"use strict";
const Constants = require ("../../../Constants");
const GlacialRayBase = require("../setpARL/GlacialRay");

class GlacialRay extends GlacialRayBase {
  constructor (game) {
    super(game, "Glacial Ray", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GlacialRay;
