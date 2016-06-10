"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmIncinerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Gempalm Incinerator", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GempalmIncinerator;
