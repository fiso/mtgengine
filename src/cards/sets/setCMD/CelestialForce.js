"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Force", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CelestialForce;
