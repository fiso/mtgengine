"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oust extends Card {
  constructor(game) {
    super(game, "Oust", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Oust;
