"use strict";
const Constants = require ("../../../Constants");
const TwistedImageBase = require("../setA25/TwistedImage");

class TwistedImage extends TwistedImageBase {
  constructor (game) {
    super(game, "Twisted Image", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TwistedImage;
