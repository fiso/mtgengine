"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenHeretic extends UnimplementedCard {
  constructor (game) {
    super(game, "Thraben Heretic", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ThrabenHeretic;
