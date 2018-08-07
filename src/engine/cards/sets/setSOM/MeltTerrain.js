"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeltTerrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Melt Terrain", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MeltTerrain;
