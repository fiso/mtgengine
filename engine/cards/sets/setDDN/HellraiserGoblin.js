"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellraiserGoblin extends Card {
  constructor(game) {
    super(game, "Hellraiser Goblin", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HellraiserGoblin;
