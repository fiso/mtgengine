"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiresToll extends UnimplementedCard {
  constructor (game) {
    super(game, "Mire's Toll", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = MiresToll;
