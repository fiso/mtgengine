"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksilver Dragon", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = QuicksilverDragon;
