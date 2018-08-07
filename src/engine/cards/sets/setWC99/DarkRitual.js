"use strict";
const Constants = require ("../../../Constants");
const DarkRitualBase = require("../setA25/DarkRitual");

class DarkRitual extends DarkRitualBase {
  constructor (game) {
    super(game, "Dark Ritual", "World Championship Decks 1999", "WC99");
  }
}

module.exports = DarkRitual;
