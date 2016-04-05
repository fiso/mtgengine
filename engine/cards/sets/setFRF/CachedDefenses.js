"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CachedDefenses extends UnimplementedCard {
  constructor(game) {
    super(game, "Cached Defenses", "Fate Reforged", "FRF");
  }
}

module.exports = CachedDefenses;
