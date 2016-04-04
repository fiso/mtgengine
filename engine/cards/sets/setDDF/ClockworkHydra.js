"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkHydra extends Card {
  constructor(game) {
    super(game, "Clockwork Hydra", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ClockworkHydra;
