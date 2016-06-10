"use strict";
const Constants = require ("../../../Constants");
const WaterspoutDjinnBase = require("../setDD3_JVC/WaterspoutDjinn");

class WaterspoutDjinn extends WaterspoutDjinnBase {
  constructor (game) {
    super(game, "Waterspout Djinn", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = WaterspoutDjinn;
