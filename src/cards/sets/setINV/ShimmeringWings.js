"use strict";
const Constants = require ("../../../Constants");
const ShimmeringWingsBase = require("../set10E/ShimmeringWings");

class ShimmeringWings extends ShimmeringWingsBase {
  constructor (game) {
    super(game, "Shimmering Wings", "Invasion", "INV");
  }
}

module.exports = ShimmeringWings;
