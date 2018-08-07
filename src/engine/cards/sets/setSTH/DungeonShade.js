"use strict";
const Constants = require ("../../../Constants");
const DungeonShadeBase = require("../setTPR/DungeonShade");

class DungeonShade extends DungeonShadeBase {
  constructor (game) {
    super(game, "Dungeon Shade", "Stronghold", "STH");
  }
}

module.exports = DungeonShade;
