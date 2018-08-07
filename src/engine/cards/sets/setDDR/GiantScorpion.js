"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Scorpion", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = GiantScorpion;
