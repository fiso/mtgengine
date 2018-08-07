"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setSS1/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Counterspell;
