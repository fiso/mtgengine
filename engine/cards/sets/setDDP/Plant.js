"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Plant extends Card {
  constructor(game) {
    super(game, "Plant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Plant;
