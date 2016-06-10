"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnhancedAwareness extends UnimplementedCard {
  constructor (game) {
    super(game, "Enhanced Awareness", "Fate Reforged", "FRF");
  }
}

module.exports = EnhancedAwareness;
