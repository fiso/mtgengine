"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kraken extends UnimplementedCard {
  constructor(game) {
    super(game, "Kraken", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Kraken;
