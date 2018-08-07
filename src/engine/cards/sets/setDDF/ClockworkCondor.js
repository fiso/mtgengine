"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkCondor extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Condor", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ClockworkCondor;
