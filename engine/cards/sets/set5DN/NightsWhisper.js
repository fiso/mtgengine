"use strict";
const Constants = require ("../../../Constants");
const NightsWhisperBase = require("../setDDM/NightsWhisper");

class NightsWhisper extends NightsWhisperBase {
  constructor(game) {
    super(game, "Night's Whisper", "Fifth Dawn", "5DN");
  }
}

module.exports = NightsWhisper;
