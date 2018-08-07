"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquelchingLeeches extends UnimplementedCard {
  constructor (game) {
    super(game, "Squelching Leeches", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = SquelchingLeeches;
