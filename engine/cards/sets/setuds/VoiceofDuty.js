"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceofDuty extends Card {
  constructor(game) {
    super(game, "Voice of Duty", "Urza's Destiny", "UDS");
  }
}

module.exports = VoiceofDuty;
