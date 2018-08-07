"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setPCA/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor (game) {
    super(game, "Whispersilk Cloak", "Commander 2016", "C16");
  }
}

module.exports = WhispersilkCloak;
