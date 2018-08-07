"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setPCA/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor (game) {
    super(game, "Whispersilk Cloak", "Darksteel", "DST");
  }
}

module.exports = WhispersilkCloak;
