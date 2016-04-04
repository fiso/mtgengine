"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhispersilkCloakBase = require("../setDST/WhispersilkCloak.js");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor(game) {
    super(game, "Whispersilk Cloak", "Magic 2011", "M11");
  }
}

module.exports = WhispersilkCloak;
