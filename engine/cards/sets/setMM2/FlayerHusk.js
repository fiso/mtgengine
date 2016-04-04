"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlayerHuskBase = require("../setMBS/FlayerHusk.js");

class FlayerHusk extends FlayerHuskBase {
  constructor(game) {
    super(game, "Flayer Husk", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FlayerHusk;
