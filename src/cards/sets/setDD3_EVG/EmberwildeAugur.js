"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberwildeAugur extends UnimplementedCard {
  constructor (game) {
    super(game, "Emberwilde Augur", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = EmberwildeAugur;
