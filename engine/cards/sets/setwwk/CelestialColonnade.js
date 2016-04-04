"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialColonnadeBase = require("../setpMEI/CelestialColonnade.js");

class CelestialColonnade extends CelestialColonnadeBase {
  constructor(game) {
    super(game, "Celestial Colonnade", "Worldwake", "WWK");
  }
}

module.exports = CelestialColonnade;
