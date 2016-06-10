"use strict";
const Constants = require ("../../../Constants");
const PuncturingLightBase = require("../setROE/PuncturingLight");

class PuncturingLight extends PuncturingLightBase {
  constructor (game) {
    super(game, "Puncturing Light", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PuncturingLight;
