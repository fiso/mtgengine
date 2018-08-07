"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllosaurusRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Allosaurus Rider", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = AllosaurusRider;
