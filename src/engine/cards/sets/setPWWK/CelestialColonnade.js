"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialColonnade extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Colonnade", "Worldwake Promos", "PWWK");
  }
}

module.exports = CelestialColonnade;
