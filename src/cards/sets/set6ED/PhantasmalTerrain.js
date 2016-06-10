"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalTerrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Terrain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhantasmalTerrain;
