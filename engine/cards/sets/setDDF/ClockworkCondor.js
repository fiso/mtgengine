"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkCondor extends Card {
  constructor(game) {
    super(game, "Clockwork Condor", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ClockworkCondor;
