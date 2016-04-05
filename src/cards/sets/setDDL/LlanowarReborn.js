"use strict";
const Constants = require ("../../../Constants");
const LlanowarRebornBase = require("../setARC/LlanowarReborn");

class LlanowarReborn extends LlanowarRebornBase {
  constructor(game) {
    super(game, "Llanowar Reborn", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = LlanowarReborn;
