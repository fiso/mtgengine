"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldShaper extends UnimplementedCard {
  constructor (game) {
    super(game, "World Shaper", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = WorldShaper;
