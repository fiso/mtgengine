"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuncturingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Puncturing Light", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PuncturingLight;
