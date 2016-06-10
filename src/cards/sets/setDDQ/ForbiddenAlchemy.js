"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenAlchemy extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidden Alchemy", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ForbiddenAlchemy;
