"use strict";
const Constants = require ("../../../Constants");
const LignifyBase = require("../setGVL/Lignify");

class Lignify extends LignifyBase {
  constructor (game) {
    super(game, "Lignify", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Lignify;
