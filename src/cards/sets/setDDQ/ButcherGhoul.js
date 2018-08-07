"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcherGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher Ghoul", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ButcherGhoul;
