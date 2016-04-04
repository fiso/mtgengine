"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazingSalvo extends Card {
  constructor(game) {
    super(game, "Blazing Salvo", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BlazingSalvo;
