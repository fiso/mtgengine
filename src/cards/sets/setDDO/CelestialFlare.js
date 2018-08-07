"use strict";
const Constants = require ("../../../Constants");
const CelestialFlareBase = require("../setORI/CelestialFlare");

class CelestialFlare extends CelestialFlareBase {
  constructor (game) {
    super(game, "Celestial Flare", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CelestialFlare;
