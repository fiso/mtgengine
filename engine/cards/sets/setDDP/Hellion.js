"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hellion extends Card {
  constructor(game) {
    super(game, "Hellion", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Hellion;
