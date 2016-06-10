"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkProspector extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Prospector", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkProspector;
