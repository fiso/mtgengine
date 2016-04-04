"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlacialRayBase = require("../setpARL/GlacialRay.js");

class GlacialRay extends GlacialRayBase {
  constructor(game) {
    super(game, "Glacial Ray", "Modern Masters", "MMA");
  }
}

module.exports = GlacialRay;
