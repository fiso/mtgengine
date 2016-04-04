"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RetracedImage extends Card {
  constructor(game) {
    super(game, "Retraced Image", "Torment", "TOR");
  }
}

module.exports = RetracedImage;
