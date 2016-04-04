"use strict";
const Constants = require ("../../../Constants");
const VoiceoftheProvincesBase = require("../setAVR/VoiceoftheProvinces");

class VoiceoftheProvinces extends VoiceoftheProvincesBase {
  constructor(game) {
    super(game, "Voice of the Provinces", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VoiceoftheProvinces;
