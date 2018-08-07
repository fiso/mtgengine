"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishAberration extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Aberration", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ElvishAberration;
