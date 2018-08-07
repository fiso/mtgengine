"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Force", "Commander 2011", "CMD");
  }
}

module.exports = CelestialForce;
