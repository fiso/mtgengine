"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberwildeAugur extends Card {
  constructor(game) {
    super(game, "Emberwilde Augur", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = EmberwildeAugur;
