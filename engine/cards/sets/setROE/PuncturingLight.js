"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PuncturingLight extends Card {
  constructor(game) {
    super(game, "Puncturing Light", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PuncturingLight;
