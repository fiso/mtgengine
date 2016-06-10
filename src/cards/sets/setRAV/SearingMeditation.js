"use strict";
const Constants = require ("../../../Constants");
const SearingMeditationBase = require("../setDDH/SearingMeditation");

class SearingMeditation extends SearingMeditationBase {
  constructor (game) {
    super(game, "Searing Meditation", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SearingMeditation;
