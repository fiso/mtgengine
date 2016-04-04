"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleetingImage extends Card {
  constructor(game) {
    super(game, "Fleeting Image", "Eighth Edition", "8ED");
  }
}

module.exports = FleetingImage;
