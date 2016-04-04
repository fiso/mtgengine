"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireOutcasts extends Card {
  constructor(game) {
    super(game, "Vampire Outcasts", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireOutcasts;
