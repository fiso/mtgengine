"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnduGiant extends Card {
  constructor(game) {
    super(game, "Ondu Giant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = OnduGiant;
