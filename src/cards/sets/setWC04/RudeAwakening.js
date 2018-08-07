"use strict";
const Constants = require ("../../../Constants");
const RudeAwakeningBase = require("../setGVL/RudeAwakening");

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, "Rude Awakening", "World Championship Decks 2004", "WC04");
  }
}

module.exports = RudeAwakening;
