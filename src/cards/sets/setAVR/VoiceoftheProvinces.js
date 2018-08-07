"use strict";
const Constants = require ("../../../Constants");
const VoiceoftheProvincesBase = require("../setDDQ/VoiceoftheProvinces");

class VoiceoftheProvinces extends VoiceoftheProvincesBase {
  constructor (game) {
    super(game, "Voice of the Provinces", "Avacyn Restored", "AVR");
  }
}

module.exports = VoiceoftheProvinces;
