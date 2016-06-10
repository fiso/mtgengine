"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tarfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Tarfire", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Tarfire;
