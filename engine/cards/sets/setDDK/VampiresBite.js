"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiresBite extends Card {
  constructor(game) {
    super(game, "Vampire's Bite", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampiresBite;
