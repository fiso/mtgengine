"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraypeltHunter extends Card {
  constructor(game) {
    super(game, "Graypelt Hunter", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = GraypeltHunter;
