"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tarfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Tarfire", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = Tarfire;
