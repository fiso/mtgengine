"use strict";
const Constants = require ("../../../Constants");
const WallofSoulsBase = require("../setTPR/WallofSouls");

class WallofSouls extends WallofSoulsBase {
  constructor (game) {
    super(game, "Wall of Souls", "Stronghold", "STH");
  }
}

module.exports = WallofSouls;
