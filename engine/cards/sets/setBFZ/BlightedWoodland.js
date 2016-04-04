"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedWoodland extends UnimplementedCard {
  constructor(game) {
    super(game, "Blighted Woodland", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedWoodland;
