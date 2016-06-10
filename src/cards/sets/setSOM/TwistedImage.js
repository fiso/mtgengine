"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistedImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Twisted Image", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TwistedImage;
