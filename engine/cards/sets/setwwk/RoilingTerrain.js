"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilingTerrain extends Card {
  constructor(game) {
    super(game, "Roiling Terrain", "Worldwake", "WWK");
  }
}

module.exports = RoilingTerrain;
