"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setPCA/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor (game) {
    super(game, "Whispersilk Cloak", "Magic 2011", "M11");
  }
}

module.exports = WhispersilkCloak;
