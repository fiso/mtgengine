"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShrapnelBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrapnel Blast", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ShrapnelBlast;
