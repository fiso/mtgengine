"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Spirit;
