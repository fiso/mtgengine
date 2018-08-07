"use strict";
const Constants = require ("../../../Constants");
const FlayerHuskBase = require("../setPCA/FlayerHusk");

class FlayerHusk extends FlayerHuskBase {
  constructor (game) {
    super(game, "Flayer Husk", "Planechase 2012", "PC2");
  }
}

module.exports = FlayerHusk;
