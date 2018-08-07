"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KioratheCrashingWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiora, the Crashing Wave", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KioratheCrashingWave;
