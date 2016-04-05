"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrainGenerator extends UnimplementedCard {
  constructor(game) {
    super(game, "Terrain Generator", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = TerrainGenerator;
