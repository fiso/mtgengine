"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Groundswell extends UnimplementedCard {
  constructor(game) {
    super(game, "Groundswell", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Groundswell;
