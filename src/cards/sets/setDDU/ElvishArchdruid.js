"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishArchdruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Archdruid", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ElvishArchdruid;
