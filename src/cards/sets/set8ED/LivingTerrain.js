"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingTerrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Terrain", "Eighth Edition", "8ED");
  }
}

module.exports = LivingTerrain;
