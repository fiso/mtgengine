"use strict";
const Constants = require ("../../../Constants");
const TarfireBase = require("../setDDT/Tarfire");

class Tarfire extends TarfireBase {
  constructor (game) {
    super(game, "Tarfire", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = Tarfire;
