"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiCoalflinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Akki Coalflinger", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = AkkiCoalflinger;
