"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishHarbinger extends Card {
  constructor(game) {
    super(game, "Elvish Harbinger", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishHarbinger;
