"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialFlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Celestial Flare", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CelestialFlare;
