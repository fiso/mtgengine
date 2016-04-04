"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Groundswell extends Card {
  constructor(game) {
    super(game, "Groundswell", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Groundswell;
