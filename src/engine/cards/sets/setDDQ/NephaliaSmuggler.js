"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NephaliaSmuggler extends UnimplementedCard {
  constructor (game) {
    super(game, "Nephalia Smuggler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = NephaliaSmuggler;
