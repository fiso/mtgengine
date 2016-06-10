"use strict";
const Constants = require ("../../../Constants");
const TarfireBase = require("../setDD3_EVG/Tarfire");

class Tarfire extends TarfireBase {
  constructor (game) {
    super(game, "Tarfire", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Tarfire;
