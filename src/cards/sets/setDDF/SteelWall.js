"use strict";
const Constants = require ("../../../Constants");
const SteelWallBase = require("../setTD2/SteelWall");

class SteelWall extends SteelWallBase {
  constructor (game) {
    super(game, "Steel Wall", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelWall;
