"use strict";
const Constants = require ("../../../Constants");
const RudeAwakeningBase = require("../setGVL/RudeAwakening");

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, "Rude Awakening", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = RudeAwakening;
