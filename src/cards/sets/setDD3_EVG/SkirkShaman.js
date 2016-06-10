"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Shaman", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkShaman;
