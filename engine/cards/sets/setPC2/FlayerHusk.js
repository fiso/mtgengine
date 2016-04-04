"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlayerHuskBase = require("../setMBS/FlayerHusk.js");

class FlayerHusk extends FlayerHuskBase {
  constructor(game) {
    super(game, "Flayer Husk", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FlayerHusk;
