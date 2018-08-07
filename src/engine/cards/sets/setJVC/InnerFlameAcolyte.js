"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerFlameAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner-Flame Acolyte", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = InnerFlameAcolyte;
