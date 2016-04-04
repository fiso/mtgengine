"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Blazing Specter", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = BlazingSpecter;
