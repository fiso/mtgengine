"use strict";
const Constants = require ("../../../Constants");
const FlayerHuskBase = require("../setPCA/FlayerHusk");

class FlayerHusk extends FlayerHuskBase {
  constructor (game) {
    super(game, "Flayer Husk", "Modern Masters 2015", "MM2");
  }
}

module.exports = FlayerHusk;
