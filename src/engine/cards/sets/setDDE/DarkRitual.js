"use strict";
const Constants = require ("../../../Constants");
const DarkRitualBase = require("../setA25/DarkRitual");

class DarkRitual extends DarkRitualBase {
  constructor (game) {
    super(game, "Dark Ritual", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = DarkRitual;
