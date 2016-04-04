"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalTerrainBase = require("../set6ED/PhantasmalTerrain.js");

class PhantasmalTerrain extends PhantasmalTerrainBase {
  constructor(game) {
    super(game, "Phantasmal Terrain", "Fifth Edition", "5ED");
  }
}

module.exports = PhantasmalTerrain;
