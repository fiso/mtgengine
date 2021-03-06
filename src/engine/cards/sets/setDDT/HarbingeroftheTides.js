"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarbingeroftheTides extends UnimplementedCard {
  constructor (game) {
    super(game, "Harbinger of the Tides", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = HarbingeroftheTides;
