"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PuncturingLightBase = require("../setROE/PuncturingLight.js");

class PuncturingLight extends PuncturingLightBase {
  constructor(game) {
    super(game, "Puncturing Light", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PuncturingLight;
