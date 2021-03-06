"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WakeThrasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Wake Thrasher", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = WakeThrasher;
