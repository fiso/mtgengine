"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wildsize extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildsize", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Wildsize;
