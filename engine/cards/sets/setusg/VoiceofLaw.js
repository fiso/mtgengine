"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceofLaw extends Card {
  constructor(game) {
    super(game, "Voice of Law", "Urza's Saga", "USG");
  }
}

module.exports = VoiceofLaw;
