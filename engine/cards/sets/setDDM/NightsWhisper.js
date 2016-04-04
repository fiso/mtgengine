"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightsWhisper extends Card {
  constructor(game) {
    super(game, "Night's Whisper", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = NightsWhisper;
