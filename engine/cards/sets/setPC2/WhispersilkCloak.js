"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setDST/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor(game) {
    super(game, "Whispersilk Cloak", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WhispersilkCloak;
