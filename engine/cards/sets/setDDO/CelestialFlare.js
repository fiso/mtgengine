"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialFlare extends Card {
  constructor(game) {
    super(game, "Celestial Flare", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CelestialFlare;
