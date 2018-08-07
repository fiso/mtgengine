"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Hydra", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ClockworkHydra;
