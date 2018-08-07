"use strict";
const Constants = require ("../../../Constants");
const TreacherousTerrainBase = require("../setPZ2/TreacherousTerrain");

class TreacherousTerrain extends TreacherousTerrainBase {
  constructor (game) {
    super(game, "Treacherous Terrain", "Commander 2016", "C16");
  }
}

module.exports = TreacherousTerrain;
