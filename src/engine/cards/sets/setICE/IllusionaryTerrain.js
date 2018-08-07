"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryTerrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Terrain", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryTerrain;
