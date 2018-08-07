"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Golem", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = SpireGolem;
