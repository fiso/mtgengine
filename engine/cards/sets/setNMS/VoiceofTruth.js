"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoiceofTruth extends Card {
  constructor(game) {
    super(game, "Voice of Truth", "Nemesis", "NMS");
  }
}

module.exports = VoiceofTruth;
