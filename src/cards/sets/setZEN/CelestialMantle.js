"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialMantle extends UnimplementedCard {
  constructor(game) {
    super(game, "Celestial Mantle", "Zendikar", "ZEN");
  }
}

module.exports = CelestialMantle;
