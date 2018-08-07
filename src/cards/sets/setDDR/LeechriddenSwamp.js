"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechriddenSwamp extends UnimplementedCard {
  constructor (game) {
    super(game, "Leechridden Swamp", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = LeechriddenSwamp;
