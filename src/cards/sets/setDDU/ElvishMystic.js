"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishMystic extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Mystic", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ElvishMystic;
