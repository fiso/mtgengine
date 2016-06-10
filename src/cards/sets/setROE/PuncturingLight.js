"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuncturingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Puncturing Light", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PuncturingLight;
