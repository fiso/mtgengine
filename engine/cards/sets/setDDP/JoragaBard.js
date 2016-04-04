"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JoragaBard extends Card {
  constructor(game) {
    super(game, "Joraga Bard", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = JoragaBard;
