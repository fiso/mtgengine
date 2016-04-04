"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StirringWildwood extends UnimplementedCard {
  constructor(game) {
    super(game, "Stirring Wildwood", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = StirringWildwood;
