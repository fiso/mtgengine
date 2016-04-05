"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilingTerrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Roiling Terrain", "Worldwake", "WWK");
  }
}

module.exports = RoilingTerrain;
