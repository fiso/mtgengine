"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Shaman", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = SkirkShaman;
