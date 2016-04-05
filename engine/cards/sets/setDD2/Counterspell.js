"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor(game) {
    super(game, "Counterspell", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Counterspell;
