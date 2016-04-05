"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofGrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Voice of Grace", "Urza's Saga", "USG");
  }
}

module.exports = VoiceofGrace;
