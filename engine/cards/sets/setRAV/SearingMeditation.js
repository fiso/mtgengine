"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearingMeditationBase = require("../setDDH/SearingMeditation.js");

class SearingMeditation extends SearingMeditationBase {
  constructor(game) {
    super(game, "Searing Meditation", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SearingMeditation;
