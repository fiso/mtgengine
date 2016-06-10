"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TranquilCove extends UnimplementedCard {
  constructor (game) {
    super(game, "Tranquil Cove", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TranquilCove;
