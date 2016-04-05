"use strict";
const Constants = require ("../../../Constants");
const FlayerHuskBase = require("../setMBS/FlayerHusk");

class FlayerHusk extends FlayerHuskBase {
  constructor(game) {
    super(game, "Flayer Husk", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FlayerHusk;
