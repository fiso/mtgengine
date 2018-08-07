"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NuisanceEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Nuisance Engine", "Planechase", "HOP");
  }
}

module.exports = NuisanceEngine;
