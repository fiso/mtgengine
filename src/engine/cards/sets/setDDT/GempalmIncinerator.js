"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmIncinerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Gempalm Incinerator", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GempalmIncinerator;
