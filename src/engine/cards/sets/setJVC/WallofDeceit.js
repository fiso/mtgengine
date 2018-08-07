"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDeceit extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Deceit", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = WallofDeceit;
