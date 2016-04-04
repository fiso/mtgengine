"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrenziedGoblin extends Card {
  constructor(game) {
    super(game, "Frenzied Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FrenziedGoblin;
