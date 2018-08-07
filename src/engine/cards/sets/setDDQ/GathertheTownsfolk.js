"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GathertheTownsfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Gather the Townsfolk", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GathertheTownsfolk;
