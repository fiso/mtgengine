"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveStrength extends Card {
  constructor(game) {
    super(game, "Grave Strength", "Fate Reforged", "FRF");
  }
}

module.exports = GraveStrength;
