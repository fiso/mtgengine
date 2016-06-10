"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofReason extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of Reason", "Urza's Destiny", "UDS");
  }
}

module.exports = VoiceofReason;
