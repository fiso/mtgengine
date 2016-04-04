"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireLacerator extends Card {
  constructor(game) {
    super(game, "Vampire Lacerator", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireLacerator;
