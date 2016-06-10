"use strict";
const Constants = require ("../../../Constants");
const VoraciousDragonBase = require("../setCON/VoraciousDragon");

class VoraciousDragon extends VoraciousDragonBase {
  constructor (game) {
    super(game, "Voracious Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = VoraciousDragon;
