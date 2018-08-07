"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GryffVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Gryff Vanguard", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GryffVanguard;
