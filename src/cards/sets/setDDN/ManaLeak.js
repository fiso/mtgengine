"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setIMA/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ManaLeak;
