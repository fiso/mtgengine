"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantasmalTerrain extends Card {
  constructor(game) {
    super(game, "Phantasmal Terrain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhantasmalTerrain;
