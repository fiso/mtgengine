"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumetheMeek extends Card {
  constructor(game) {
    super(game, "Consume the Meek", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ConsumetheMeek;
