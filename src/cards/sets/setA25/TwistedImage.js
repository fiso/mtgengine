"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistedImage extends UnimplementedCard {
  constructor (game) {
    super(game, "Twisted Image", "Masters 25", "A25");
  }
}

module.exports = TwistedImage;
