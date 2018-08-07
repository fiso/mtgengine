"use strict";
const Constants = require ("../../../Constants");
const WhispersilkCloakBase = require("../setPCA/WhispersilkCloak");

class WhispersilkCloak extends WhispersilkCloakBase {
  constructor (game) {
    super(game, "Whispersilk Cloak", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = WhispersilkCloak;
