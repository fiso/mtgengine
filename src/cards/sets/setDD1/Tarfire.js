"use strict";
const Constants = require ("../../../Constants");
const TarfireBase = require("../setDDT/Tarfire");

class Tarfire extends TarfireBase {
  constructor (game) {
    super(game, "Tarfire", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = Tarfire;
