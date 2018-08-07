"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Earth", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = SpittingEarth;
