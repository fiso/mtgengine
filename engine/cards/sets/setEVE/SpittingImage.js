"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingImage extends Card {
  constructor(game) {
    super(game, "Spitting Image", "Eventide", "EVE");
  }
}

module.exports = SpittingImage;
