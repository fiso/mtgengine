"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerrainGenerator extends Card {
  constructor(game) {
    super(game, "Terrain Generator", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = TerrainGenerator;
