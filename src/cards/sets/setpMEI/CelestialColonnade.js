"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialColonnade extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Colonnade", "Media Inserts", "pMEI");
  }
}

module.exports = CelestialColonnade;
