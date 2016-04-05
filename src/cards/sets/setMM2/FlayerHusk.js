"use strict";
const Constants = require ("../../../Constants");
const FlayerHuskBase = require("../setMBS/FlayerHusk");

class FlayerHusk extends FlayerHuskBase {
  constructor(game) {
    super(game, "Flayer Husk", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FlayerHusk;
