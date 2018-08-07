"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialFlare extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Flare", "Magic Origins", "ORI");
  }
}

module.exports = CelestialFlare;
