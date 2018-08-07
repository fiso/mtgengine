"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DearlyDeparted extends UnimplementedCard {
  constructor (game) {
    super(game, "Dearly Departed", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DearlyDeparted;
