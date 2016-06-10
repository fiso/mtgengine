"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireLacerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Lacerator", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireLacerator;
