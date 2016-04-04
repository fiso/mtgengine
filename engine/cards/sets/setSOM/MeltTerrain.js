"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeltTerrain extends Card {
  constructor(game) {
    super(game, "Melt Terrain", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MeltTerrain;
