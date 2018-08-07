"use strict";
const Constants = require ("../../../Constants");
const PuncturingLightBase = require("../setSOI/PuncturingLight");

class PuncturingLight extends PuncturingLightBase {
  constructor (game) {
    super(game, "Puncturing Light", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PuncturingLight;
