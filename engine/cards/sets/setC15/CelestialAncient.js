"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialAncient extends UnimplementedCard {
  constructor(game) {
    super(game, "Celestial Ancient", "Commander 2015", "C15");
  }
}

module.exports = CelestialAncient;
