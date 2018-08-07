"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PestilenceDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Pestilence Demon", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = PestilenceDemon;
