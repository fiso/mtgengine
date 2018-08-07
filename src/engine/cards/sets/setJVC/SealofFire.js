"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Seal of Fire", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = SealofFire;
