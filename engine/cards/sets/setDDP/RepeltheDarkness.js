"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RepeltheDarkness extends Card {
  constructor(game) {
    super(game, "Repel the Darkness", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RepeltheDarkness;
