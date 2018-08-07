"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialAncient extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Ancient", "Planechase Anthology", "PCA");
  }
}

module.exports = CelestialAncient;
