"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceofGrace extends Card {
  constructor(game) {
    super(game, "Voice of Grace", "Urza's Saga", "USG");
  }
}

module.exports = VoiceofGrace;
