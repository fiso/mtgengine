"use strict";
const Constants = require ("../../../Constants");
const ScrollThiefBase = require("../setDDT/ScrollThief");

class ScrollThief extends ScrollThiefBase {
  constructor (game) {
    super(game, "Scroll Thief", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = ScrollThief;
