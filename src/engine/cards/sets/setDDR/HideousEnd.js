"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HideousEnd extends UnimplementedCard {
  constructor (game) {
    super(game, "Hideous End", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = HideousEnd;
