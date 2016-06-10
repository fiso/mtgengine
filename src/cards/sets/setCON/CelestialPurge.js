"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialPurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Purge", "Conflux", "CON");
  }
}

module.exports = CelestialPurge;
