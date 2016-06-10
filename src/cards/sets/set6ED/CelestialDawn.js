"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialDawn extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Dawn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CelestialDawn;
