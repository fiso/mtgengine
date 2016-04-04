"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonHierarch extends Card {
  constructor(game) {
    super(game, "Loxodon Hierarch", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LoxodonHierarch;
