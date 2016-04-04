"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoiceoftheProvincesBase = require("../setAVR/VoiceoftheProvinces.js");

class VoiceoftheProvinces extends VoiceoftheProvincesBase {
  constructor(game) {
    super(game, "Voice of the Provinces", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VoiceoftheProvinces;
