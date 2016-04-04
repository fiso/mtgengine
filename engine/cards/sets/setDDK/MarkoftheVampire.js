"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkoftheVampire extends Card {
  constructor(game) {
    super(game, "Mark of the Vampire", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MarkoftheVampire;
