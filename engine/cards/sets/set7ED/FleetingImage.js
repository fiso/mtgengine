"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleetingImageBase = require("../set8ED/FleetingImage.js");

class FleetingImage extends FleetingImageBase {
  constructor(game) {
    super(game, "Fleeting Image", "Seventh Edition", "7ED");
  }
}

module.exports = FleetingImage;
