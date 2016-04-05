"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHarbinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Harbinger", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishHarbinger;
