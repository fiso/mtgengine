"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoamLion extends Card {
  constructor(game) {
    super(game, "Loam Lion", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LoamLion;
