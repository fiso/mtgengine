"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightsWhisperBase = require("../setDDM/NightsWhisper.js");

class NightsWhisper extends NightsWhisperBase {
  constructor(game) {
    super(game, "Night's Whisper", "Fifth Dawn", "5DN");
  }
}

module.exports = NightsWhisper;
