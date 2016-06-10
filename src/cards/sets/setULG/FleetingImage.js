"use strict";
const Constants = require ("../../../Constants");
const FleetingImageBase = require("../set8ED/FleetingImage");

class FleetingImage extends FleetingImageBase {
  constructor (game) {
    super(game, "Fleeting Image", "Urza's Legacy", "ULG");
  }
}

module.exports = FleetingImage;
