"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setDST/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor(game) {
    super(game, "Whispersilk Cloak", "Magic 2010", "M10");
  }
}

module.exports = WhispersilkCloak;
