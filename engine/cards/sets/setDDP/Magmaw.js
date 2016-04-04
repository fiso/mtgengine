"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Magmaw extends Card {
  constructor(game) {
    super(game, "Magmaw", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Magmaw;
