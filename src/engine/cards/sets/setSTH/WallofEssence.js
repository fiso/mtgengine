"use strict";
const Constants = require ("../../../Constants");
const WallofEssenceBase = require("../setTPR/WallofEssence");

class WallofEssence extends WallofEssenceBase {
  constructor (game) {
    super(game, "Wall of Essence", "Stronghold", "STH");
  }
}

module.exports = WallofEssence;
