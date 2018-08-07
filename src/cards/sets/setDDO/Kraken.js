"use strict";
const Constants = require ("../../../Constants");
const KrakenBase = require("../setTA25/Kraken");

class Kraken extends KrakenBase {
  constructor (game) {
    super(game, "Kraken", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Kraken;
