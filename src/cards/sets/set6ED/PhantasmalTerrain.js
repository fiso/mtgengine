"use strict";
const Constants = require ("../../../Constants");
const PhantasmalTerrainBase = require("../setME4/PhantasmalTerrain");

class PhantasmalTerrain extends PhantasmalTerrainBase {
  constructor (game) {
    super(game, "Phantasmal Terrain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhantasmalTerrain;
