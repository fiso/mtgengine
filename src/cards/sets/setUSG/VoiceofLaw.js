"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofLaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of Law", "Urza's Saga", "USG");
  }
}

module.exports = VoiceofLaw;
