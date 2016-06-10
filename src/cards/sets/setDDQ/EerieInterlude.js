"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EerieInterlude extends UnimplementedCard {
  constructor (game) {
    super(game, "Eerie Interlude", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = EerieInterlude;
