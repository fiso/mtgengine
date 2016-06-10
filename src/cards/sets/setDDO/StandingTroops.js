"use strict";
const Constants = require ("../../../Constants");
const StandingTroopsBase = require("../set6ED/StandingTroops");

class StandingTroops extends StandingTroopsBase {
  constructor (game) {
    super(game, "Standing Troops", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = StandingTroops;
