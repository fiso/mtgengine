"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireOutcasts extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire Outcasts", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireOutcasts;
