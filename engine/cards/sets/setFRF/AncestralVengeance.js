"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralVengeance extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestral Vengeance", "Fate Reforged", "FRF");
  }
}

module.exports = AncestralVengeance;
