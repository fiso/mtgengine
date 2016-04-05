"use strict";
const Constants = require ("../../../Constants");
const ShimmeringWingsBase = require("../setINV/ShimmeringWings");

class ShimmeringWings extends ShimmeringWingsBase {
  constructor(game) {
    super(game, "Shimmering Wings", "Tempest", "TMP");
  }
}

module.exports = ShimmeringWings;
