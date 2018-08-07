"use strict";
const Constants = require ("../../../Constants");
const SpittingImageBase = require("../setCM2/SpittingImage");

class SpittingImage extends SpittingImageBase {
  constructor (game) {
    super(game, "Spitting Image", "Commander 2016", "C16");
  }
}

module.exports = SpittingImage;
