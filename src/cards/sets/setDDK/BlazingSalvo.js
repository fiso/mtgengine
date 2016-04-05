"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingSalvo extends UnimplementedCard {
  constructor(game) {
    super(game, "Blazing Salvo", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BlazingSalvo;
