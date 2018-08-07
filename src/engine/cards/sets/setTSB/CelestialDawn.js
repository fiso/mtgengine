"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialDawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Dawn", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = CelestialDawn;
