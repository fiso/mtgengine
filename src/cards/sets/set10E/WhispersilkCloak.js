"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setDST/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor(game) {
    super(game, "Whispersilk Cloak", "Tenth Edition", "10E");
  }
}

module.exports = WhispersilkCloak;
