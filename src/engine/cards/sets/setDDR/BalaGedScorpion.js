"use strict";
const Constants = require ("../../../Constants");
const BalaGedScorpionBase = require("../setIMA/BalaGedScorpion");

class BalaGedScorpion extends BalaGedScorpionBase {
  constructor (game) {
    super(game, "Bala Ged Scorpion", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = BalaGedScorpion;
