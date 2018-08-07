"use strict";
const Constants = require ("../../../Constants");
const CelestialColonnadeBase = require("../setPWWK/CelestialColonnade");

class CelestialColonnade extends CelestialColonnadeBase {
  constructor (game) {
    super(game, "Celestial Colonnade", "Magic Online Promos", "PRM");
  }
}

module.exports = CelestialColonnade;
