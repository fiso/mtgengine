"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setSS1/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Counterspell;
