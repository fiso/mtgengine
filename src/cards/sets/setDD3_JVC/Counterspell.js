"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor(game) {
    super(game, "Counterspell", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Counterspell;
