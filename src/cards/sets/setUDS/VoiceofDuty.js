"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of Duty", "Urza's Destiny", "UDS");
  }
}

module.exports = VoiceofDuty;
