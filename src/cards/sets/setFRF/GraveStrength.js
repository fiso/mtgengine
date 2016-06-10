"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Strength", "Fate Reforged", "FRF");
  }
}

module.exports = GraveStrength;
