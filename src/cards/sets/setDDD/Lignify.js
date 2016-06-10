"use strict";
const Constants = require ("../../../Constants");
const LignifyBase = require("../setDD3_GVL/Lignify");

class Lignify extends LignifyBase {
  constructor (game) {
    super(game, "Lignify", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Lignify;
