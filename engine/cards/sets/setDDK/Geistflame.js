"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Geistflame extends Card {
  constructor(game) {
    super(game, "Geistflame", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Geistflame;
