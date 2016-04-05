"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnbreathingHorde extends UnimplementedCard {
  constructor(game) {
    super(game, "Unbreathing Horde", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = UnbreathingHorde;
