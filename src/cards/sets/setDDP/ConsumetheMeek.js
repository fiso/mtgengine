"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumetheMeek extends UnimplementedCard {
  constructor(game) {
    super(game, "Consume the Meek", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ConsumetheMeek;
