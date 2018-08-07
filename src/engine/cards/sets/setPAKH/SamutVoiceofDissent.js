"use strict";
const Constants = require ("../../../Constants");
const SamutVoiceofDissentBase = require("../setAKH/SamutVoiceofDissent");

class SamutVoiceofDissent extends SamutVoiceofDissentBase {
  constructor (game) {
    super(game, "Samut, Voice of Dissent", "Amonkhet Promos", "PAKH");
  }
}

module.exports = SamutVoiceofDissent;
