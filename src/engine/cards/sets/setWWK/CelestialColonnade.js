"use strict";
const Constants = require ("../../../Constants");
const CelestialColonnadeBase = require("../setPWWK/CelestialColonnade");

class CelestialColonnade extends CelestialColonnadeBase {
  constructor (game) {
    super(game, "Celestial Colonnade", "Worldwake", "WWK");
  }
}

module.exports = CelestialColonnade;
