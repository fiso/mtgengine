"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Emissary", "Commander Anthology", "CMA");
  }
}

module.exports = ViridianEmissary;
