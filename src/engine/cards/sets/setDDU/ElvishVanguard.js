"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Vanguard", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ElvishVanguard;
