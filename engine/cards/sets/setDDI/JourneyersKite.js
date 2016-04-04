"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JourneyersKiteBase = require("../setCHK/JourneyersKite.js");

class JourneyersKite extends JourneyersKiteBase {
  constructor(game) {
    super(game, "Journeyer's Kite", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JourneyersKite;
