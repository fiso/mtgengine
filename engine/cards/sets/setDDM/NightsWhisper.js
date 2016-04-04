"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightsWhisper extends UnimplementedCard {
  constructor(game) {
    super(game, "Night's Whisper", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = NightsWhisper;
