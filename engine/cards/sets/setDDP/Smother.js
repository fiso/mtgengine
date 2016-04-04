"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Smother extends Card {
  constructor(game) {
    super(game, "Smother", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Smother;
