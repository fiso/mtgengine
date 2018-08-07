"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadReturn extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Return", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DreadReturn;
