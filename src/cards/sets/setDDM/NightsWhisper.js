"use strict";
const Constants = require ("../../../Constants");
const NightsWhisperBase = require("../setEMA/NightsWhisper");

class NightsWhisper extends NightsWhisperBase {
  constructor (game) {
    super(game, "Night's Whisper", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = NightsWhisper;
