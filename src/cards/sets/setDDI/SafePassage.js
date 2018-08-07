"use strict";
const Constants = require ("../../../Constants");
const SafePassageBase = require("../setM13/SafePassage");

class SafePassage extends SafePassageBase {
  constructor (game) {
    super(game, "Safe Passage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SafePassage;
