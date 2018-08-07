"use strict";
const Constants = require ("../../../Constants");
const FleetingImageBase = require("../set9ED/FleetingImage");

class FleetingImage extends FleetingImageBase {
  constructor (game) {
    super(game, "Fleeting Image", "Eighth Edition", "8ED");
  }
}

module.exports = FleetingImage;
