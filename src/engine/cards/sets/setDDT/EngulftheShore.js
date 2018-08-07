"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngulftheShore extends UnimplementedCard {
  constructor (game) {
    super(game, "Engulf the Shore", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = EngulftheShore;
