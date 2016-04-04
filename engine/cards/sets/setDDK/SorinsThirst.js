"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SorinsThirst extends Card {
  constructor(game) {
    super(game, "Sorin's Thirst", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SorinsThirst;
