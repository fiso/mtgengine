"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoiceofTruth extends UnimplementedCard {
  constructor (game) {
    super(game, "Voice of Truth", "Nemesis", "NMS");
  }
}

module.exports = VoiceofTruth;
