"use strict";
const Constants = require ("../../../Constants");
const SpittingImageBase = require("../setCM2/SpittingImage");

class SpittingImage extends SpittingImageBase {
  constructor (game) {
    super(game, "Spitting Image", "Eventide", "EVE");
  }
}

module.exports = SpittingImage;
