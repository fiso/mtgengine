"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifecraftersBestiary extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifecrafter's Bestiary", "Aether Revolt", "AER");
  }
}

module.exports = LifecraftersBestiary;
