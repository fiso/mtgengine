"use strict";
const Constants = require ("../../../Constants");
const FleetingImageBase = require("../set8ED/FleetingImage");

class FleetingImage extends FleetingImageBase {
  constructor(game) {
    super(game, "Fleeting Image", "Seventh Edition", "7ED");
  }
}

module.exports = FleetingImage;
