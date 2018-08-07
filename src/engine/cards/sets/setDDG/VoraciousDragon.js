"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Voracious Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = VoraciousDragon;
