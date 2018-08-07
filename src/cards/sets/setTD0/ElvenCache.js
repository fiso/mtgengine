"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenCache extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Cache", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ElvenCache;
