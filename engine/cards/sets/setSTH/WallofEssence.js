"use strict";
const Constants = require ("../../../Constants");
const WallofEssenceBase = require("../setM15/WallofEssence");

class WallofEssence extends WallofEssenceBase {
  constructor(game) {
    super(game, "Wall of Essence", "Stronghold", "STH");
  }
}

module.exports = WallofEssence;
