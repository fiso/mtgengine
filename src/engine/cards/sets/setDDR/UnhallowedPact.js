"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnhallowedPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Unhallowed Pact", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = UnhallowedPact;
