"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BadMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Bad Moon", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = BadMoon;
