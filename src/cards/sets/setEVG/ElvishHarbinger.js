"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHarbinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Harbinger", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishHarbinger;
