"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwistedImage extends Card {
  constructor(game) {
    super(game, "Twisted Image", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TwistedImage;
