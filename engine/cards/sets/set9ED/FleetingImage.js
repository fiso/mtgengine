"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleetingImageBase = require("../set8ED/FleetingImage.js");

class FleetingImage extends FleetingImageBase {
  constructor(game) {
    super(game, "Fleeting Image", "Ninth Edition", "9ED");
  }
}

module.exports = FleetingImage;
