"use strict";
const Constants = require ("../../../Constants");
const ShimmeringWingsBase = require("../setINV/ShimmeringWings");

class ShimmeringWings extends ShimmeringWingsBase {
  constructor(game) {
    super(game, "Shimmering Wings", "Tenth Edition", "10E");
  }
}

module.exports = ShimmeringWings;
