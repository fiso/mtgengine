"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShimmeringWingsBase = require("../setINV/ShimmeringWings.js");

class ShimmeringWings extends ShimmeringWingsBase {
  constructor(game) {
    super(game, "Shimmering Wings", "Tenth Edition", "10E");
  }
}

module.exports = ShimmeringWings;
