"use strict";
const Constants = require ("../../../Constants");
const JourneyersKiteBase = require("../setCHK/JourneyersKite");

class JourneyersKite extends JourneyersKiteBase {
  constructor(game) {
    super(game, "Journeyer's Kite", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JourneyersKite;
