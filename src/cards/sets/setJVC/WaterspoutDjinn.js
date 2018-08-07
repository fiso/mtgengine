"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterspoutDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Waterspout Djinn", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = WaterspoutDjinn;
