"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnhancedAwareness extends Card {
  constructor(game) {
    super(game, "Enhanced Awareness", "Fate Reforged", "FRF");
  }
}

module.exports = EnhancedAwareness;
